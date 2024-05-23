// app/posts/page.js
import React from 'react';

// GraphQL query to fetch posts
const GET_POSTS_QUERY = `
  query {
    posts {
      _id
      title
      name
    }
  }
`;

// Function to fetch posts from the GraphQL API
async function fetchPosts() {
  const res = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_POSTS_QUERY,
    }),
  });
  // console.log("res", res)
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const json = await res.json();
  console.log("json", json.data.posts)
  return json.data.posts;
}

// Server-side component to display posts
export default async function PostsPage() {
  // const posts = await fetchPosts();
  const posts = []
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
