import { ApolloServer, gql } from 'apollo-server';
const PORT = 8080;
// basic schema
const typeDefs = gql`
  type Query {
    testString: String

    myTest: String

    myTest2: Int
  }
`;
const server = new ApolloServer({ typeDefs, mocks: true });
server.listen({ port: PORT }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));