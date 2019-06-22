import { IUser, IPodcast } from '../schema/Schema'
import { Podcast } from '../model/Podcast'

interface CreatePodArgs {
  user: IUser
  name: string
  rss: string
  image: string
}

interface UpdatePodArgs {
  id: string
  name: string
  rss: string
  image: string
}

const resolvers = {
  createPodcast: (args: CreatePodArgs) => {
    // save the rss/image to their s3 bucket
    const { user, name, rss, image } = args
    const podcast = new Podcast({
      user,
      name,
      rss,
      image,
      created: new Date()
    })
    return podcast
      .save()
      .then((result: IPodcast) => result)
      .catch((err: Error) => {
        throw err
      })
  },
  updatePodcast: (args: UpdatePodArgs) => {
    Podcast.findOne({ id: args.id }).then((podcast: IPodcast) => {
      return podcast.update({
        name: args.name,
        rss: args.rss,
        image: args.image,
        updated: new Date()
      })
    })
  }
}

export default resolvers
