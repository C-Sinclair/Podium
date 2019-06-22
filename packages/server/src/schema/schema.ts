import { GraphQLObjectType } from 'graphql'

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {}
})

export const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {}
})
