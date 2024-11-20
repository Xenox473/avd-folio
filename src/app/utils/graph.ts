import neo4j, { Result } from 'neo4j-driver';
import { DocumentInterface } from '@langchain/core/documents';

const { NEO4J_URL, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;


if (!NEO4J_URL || !NEO4J_USERNAME || !NEO4J_PASSWORD) {
  throw new Error('Missing required environment variables for Neo4j connection');
}

const driver = neo4j.driver(
  NEO4J_URL!,
  neo4j.auth.basic(NEO4J_USERNAME!, NEO4J_PASSWORD!)
);

async function runQuery(query: string): Promise<Result> {
  const session = driver.session()
  try {
    return await session.run(query);
  } finally {
    await session.close();
  }
};

type NodePropertiesProps = {
  type: string,
  skill: string,
  description: string,
  title: string,
  subtitle: string,
  timeline: string
}

type NodeRecordProps = {
  _fields: {
    labels: string[],
    properties: NodePropertiesProps
  }[]
}

export async function fetchNodes(nodes: [DocumentInterface, number][]) {
  const graphNodes = await Promise.all(nodes.map(async (node) => {
    const nodeLabel = node[0].metadata.label;

    if (nodeLabel === "Blurb") {
      return node[0].metadata.value;
    }

    const nodeId = node[0].metadata.element_id;

    const query = `
      MATCH (E: Experience)-[:work_done]->(D:Descriptions)-[:uses_skill]->(S:Skills)
      WHERE elementId(${nodeLabel.substring(0, 1)}) = "${nodeId}"
      RETURN E, D, S
    `;

    return await runQuery(query);
  }));

  const cleanedUpNodes = graphNodes.map((node) => cleanUpNode(node));

  return aggregateNodes(cleanedUpNodes);
};

function cleanUpExperience(node: NodePropertiesProps) {
  if (node.type == "Personal") {
    return `${node.title} - ${node.subtitle}`
  }
  
  return `${node.subtitle} at ${node.title} from ${node.timeline}`
};

function cleanUpDescriptions(node: NodePropertiesProps) {
  return `${node.description}`
};

function cleanUpSkills(node: NodePropertiesProps) {
  return `${node.skill} (${node.type})`
};

export function cleanUpNode(node: { records: NodeRecordProps[]; }) {
  if (typeof(node) === "string") {
    return node;
  };
  
  const results = node.records.map((record) => {
    const fields = record["_fields"].map((field: { labels: string[]; properties: NodePropertiesProps; }) => {
      const nodeLabel =  field.labels[0]
      const nodeProperties = field.properties

      let result = null;
      switch (nodeLabel) {
        case "Experience": 
          result = { Experience: cleanUpExperience(nodeProperties) };
          break;
        case "Descriptions":
          result = { Descriptions: cleanUpDescriptions(nodeProperties) };
          break;
        case "Skills":
          result = { Skills: cleanUpSkills(nodeProperties) };
          break;
      }

      return result;
    })
    
    return { ...fields[0], ...fields[1], ...fields[2] };
  })

  return results;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function aggregateNodes(nodes: any[]) {
  return nodes.reduce((acc, curr) => [ ...acc, ...curr]).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduce((acc: { [x: string]: { Descriptions: any[]; Skills: any[]; }; }, curr: { [x: string]: any; }) => {
        if (curr["Experience"] in acc) {
            acc[curr["Experience"]]["Descriptions"] = [... new Set(acc[curr["Experience"]]["Descriptions"]).add(curr["Descriptions"])]
            acc[curr["Experience"]]["Skills"] = [... new Set(acc[curr["Experience"]]["Skills"]).add(curr["Skills"])]
        } else {
            acc[curr["Experience"]] = {
                "Descriptions": [curr["Descriptions"]],
                "Skills": [curr["Skills"]]
            }
        }
        return acc;
    }, {})
};


