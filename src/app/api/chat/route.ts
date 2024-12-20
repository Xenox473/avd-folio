import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { fetchNodes } from "@/app/utils/graph";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

const pc = new Pinecone();
const pineconeIndex = pc.index('avd-bot')

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small"
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Tag = require("en-pos").Tag;

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  const tags = new Tag(query.split(" "))
  .initial()
  .smooth()
  .tags;
  
  const filtered_query = query.split(" ").filter((word: string, index: number) => {
    return (tags[index].startsWith("N")) | (tags[index].startsWith("J"));
  }).join(" ");

  console.log(tags, filtered_query)

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });

  const topNodes = await vectorStore.similaritySearchWithScore(filtered_query, 5);

  if (topNodes.length === 0) {
    return NextResponse.json("Sorry, I do not have enough information to answer that question.")
  }

  console.log(topNodes);
  
  const maxScore = Math.max(...topNodes.map((nodes) => nodes[1]))
  const filteredNodes = topNodes.filter((nodes) => nodes[1] === maxScore)

  const graphNodes = await fetchNodes(filteredNodes);
  const model = new ChatOpenAI({});
  
  const prompt =
    PromptTemplate.fromTemplate(`
      Use the following pieces of context to answer the question about a software engineer named Abhi.
      If the context doesn't provide enough information or know context is provided, just say that you don't know, don't try to make up an answer.
      Pay attention to the context of the question rather than just looking for similar keywords in the corpus.
      Use the descriptions from the context to provide examples. Always mention work experience and job description when possible. Do not refer to the context in the answer. Provide all of the descriptions as an example wherever possible.
      Context:
      Abhi is a software engineer with over 5 years of experience. He has a passion for building products that help people and communities. He recently graduated with a Master's in Data Science and have a strong interest in AI and NLP applications. He enjoys working on teams that foster a culture of open and honest communication, provide opportunities to wear many hats, and encourage collaboration and mentorship. He's worked on small to medium sized teams across various industries like healthcare and election forecasting and on projects across the entire tech stack.
      {context}
      Question: {question}
    `);

  console.log(JSON.stringify(graphNodes))

  const chain = RunnableSequence.from([
    prompt,
    model,
    new StringOutputParser(),
  ]);

  const result = await chain.invoke({
    "context": JSON.stringify(graphNodes),
    "question": query
  });

  return NextResponse.json(result);
};
