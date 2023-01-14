const fs = require("fs");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { resolvers } = require("./resolver");
const { join } = require("path");

const typeDefs = fs.readFileSync(join(__dirname, "schema.graphql"), "utf-8");

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server).then(({ url }) =>
  console.log("Server is up and running at ", url)
);
