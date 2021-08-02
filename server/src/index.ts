import { ApolloServer} from 'apollo-server';
import { resolvers } from './resolvers';
import {readFileSync} from 'fs';
import { resolve  } from 'path';

const typeDefs = readFileSync(resolve(__dirname, './schema.gql')).toString('utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
