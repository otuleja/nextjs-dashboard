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
    const payload = process.env.KINDE_POST_LOGOUT_REDIRECT_URL + " " + process.env.BASE_URL
    return NextResponse.json(payload);

  } catch (e) {
    console.log("here in error block")
    console.log("\n\n\n\n\n\n\n", e, "\n\n\n\n\n\n\n")
    return NextResponse.error(new Error('Error getting posts'));
  }
}
