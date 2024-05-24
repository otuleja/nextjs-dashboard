
const resolvers = {
  Query: {
    posts: async (_, __, { db }) => {
      // const posts = await db.collection('posts').find({}).toArray();
      const posts = [{ _id: "1", title: "title", name: "name" }]
      return posts;
    },
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

export default resolvers;