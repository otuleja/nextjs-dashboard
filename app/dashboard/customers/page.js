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
  const baseUrl = process.env.BASE_URL
  const res = await fetch(`${baseUrl}/api/graphql`, {
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
  // return []
}

// Server-side component to display posts
export default async function PostsPage() {
  console.log("posts page", process.env.KINDE_POST_LOGOUT_REDIRECT_URL, process.env.BASE_URL)
  const posts = await fetchPosts();
  // const posts = []
  return (
    <div>
      <h1>Postsssss</h1>
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
