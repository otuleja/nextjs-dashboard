const typeDefs = `#graphql
  type Post {
    _id: ID!
    title: String
    name: String
  }
  
  input NewUserInput {
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    createUser(input: NewUserInput!): Post
  }
`;

export default typeDefs;