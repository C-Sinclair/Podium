import userResolver from './user'
import projectResolver from './project'
import podcastResolver from './podcast'
import episodeResolver from './episode'
import { IResolvers } from 'graphql-tools'

const resolvers: IResolvers = {
  ...userResolver,
  ...projectResolver,
  ...podcastResolver,
  ...episodeResolver
}

export default resolvers
