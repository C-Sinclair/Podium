import userResolver from './user'
import projectResolver from './project'
import podResolver from './pod'
import episodeResolver from './episode'

const resolvers = {
  ...userResolver,
  ...projectResolver,
  ...podResolver,
  ...episodeResolver
}

export default resolvers
