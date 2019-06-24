import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import * as typeDefs from './schema.gql'
import { GraphQLSchema } from 'graphql'
import resolvers from '../resolvers'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
