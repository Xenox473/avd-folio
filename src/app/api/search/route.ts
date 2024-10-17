import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { fetchNodes } from "@/app/utils/graph";

export const MaxDuration = 900;

const pc = new Pinecone();
const pineconeIndex = pc.index('avd-bot')

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small"
});

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
  });

  const similaritySearchWithScoreResults = await vectorStore.similaritySearchWithScore(query, 5);
  const maxScore = similaritySearchWithScoreResults.map((result) => result[1]).reduce((prev, current) => {
    return (prev && prev > current) ? prev : current
  })

  if (maxScore < 0.6) {
    return NextResponse.json([])
  } 

  const topNodes = similaritySearchWithScoreResults.filter(result => result[1] === maxScore)
  const graphNodes = await fetchNodes(topNodes);

  return NextResponse.json(graphNodes);
};
