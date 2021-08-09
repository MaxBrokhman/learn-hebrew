import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { resolvers } from './resolvers'

const typeDefs = readFileSync(resolve(__dirname, './schema.gql')).toString('utf-8')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`)
})
