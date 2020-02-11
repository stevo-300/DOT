const express = require("express");
// const { ApolloServer, gql } = require("apollo-server-express");
// const { typeDefs } = require("./graphql/schema");
// const { resolvers } = require("./graphql/resolvers");
// const fs = require("fs");

// const apollo = new ApolloServer({ typeDefs, resolvers });
const app = express();

// apollo.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server Ready`)
);
