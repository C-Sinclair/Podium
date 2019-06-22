import userResolver from './user'
import projectResolver from './project'
import podcastResolver from './podcast'
import episodeResolver from './episode'

const resolvers = {
  ...userResolver,
  ...projectResolver,
  ...podcastResolver,
  ...episodeResolver
}

export default resolvers
