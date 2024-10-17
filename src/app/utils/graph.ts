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

export async function fetchNodes(nodes: [DocumentInterface, number][] ) {
  const graphNodes = await Promise.all(nodes.map(async (node) => {
    const nodeLabel = node[0].metadata.label;
    const nodeId = node[0].metadata.element_id;

    const query = `
      MATCH (n:${nodeLabel})
      WHERE elementId(n) = "${nodeId}"
      RETURN n AS node
    `;

    return await runQuery(query);
  }))

  const cleanedUpNodes = graphNodes.map((node) => cleanUpNode(node));

  return cleanedUpNodes;
};

function cleanUpExperience(node: { type: string; title: string; subtitle: any; timeline: any; }) {
  if (node.type == "Personal") {
    return `Personal project: ${node.title} - ${node.subtitle}`
  }
  
  return `${node.type}: ${node.subtitle} at ${node.title} from ${node.timeline}`
};

function cleanUpDescriptions(node: { description: any; }) {
  return node.description
};

function cleanUpSkills(node: { skill: any; type: any; }) {
  return `${node.skill} (${node.type})`
};

function cleanUpNode(node: { records: any; }) {
  const nodeLabel =  node.records[0]["_fields"][0].labels[0]
  const nodeProperties = node.records[0]["_fields"][0].properties

  console.log(nodeLabel);
  console.log(nodeProperties);

  let result = null;
  switch (nodeLabel) {
    case "Experience": 
      result = cleanUpExperience(nodeProperties);
      break;
    case "Descriptions":
      result = cleanUpDescriptions(nodeProperties);
      break;
    case "Skills":
      result = cleanUpSkills(nodeProperties);
      break;
  }
  return result;
};
// fetchExperience(label, nodeID)
// fetchDescriptions
// fetchSkills