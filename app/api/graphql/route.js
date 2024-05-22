import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import clientPromise from "../../lib/mongodb";
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    const client = await clientPromise;
    const db = client.db();
    return { req, res, db };
  },
});

export async function GET(request) {
  return handler(request);
}
export async function POST(request) {
  return handler(request);
}

