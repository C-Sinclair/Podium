import { Episode, IEpisode } from '../model/Episode'
import { IResolvers } from 'graphql-tools'
import { IPodcast } from '../model/Podcast'

interface CreateEpisodeArgs {
  podcast: IPodcast
  file: string
  image: string
}

interface UpdateEpisodeArgs {
  id: string
  podcast: IPodcast
  file: string
  image: string
}

const resolvers: IResolvers = {
  Mutation: {
    createEpisode: (args: CreateEpisodeArgs) => {
      const { podcast, file, image } = args
      const episode = new Episode({
        podcast,
        file,
        image,
        created: new Date()
      })
      return episode
        .save()
        .then((result: IEpisode) => result)
        .catch((err: Error) => {
          throw err
        })
    },
    updateEpisode: (args: UpdateEpisodeArgs) => {
      Episode.findOne({ id: args.id }).then((episode: IEpisode) => {
        return episode.update({
          podcast: args.podcast,
          file: args.file,
          image: args.image,
          updated: new Date()
        })
      })
    }
  }
}

export default resolvers
