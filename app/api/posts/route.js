import clientPromise from '../../lib/mongodb';
import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const client = await clientPromise;
//   const db = client.db();
//   const post = await request.json();
//   const result = await db.collection('posts').insertOne(post);
//   return NextResponse.json(result.ops[0]);
// }

export async function GET() {
  try {
    // const client = await clientPromise;
    // const db = client.db();
    // const posts = await db.collection('posts').find({}).toArray();
    const posts = "alpha"
    return NextResponse.json(posts);

  } catch (e) {
    console.log("here in error block")
    console.log("\n\n\n\n\n\n\n", e, "\n\n\n\n\n\n\n")
    return NextResponse.error(new Error('Error getting posts'));
  }
}
