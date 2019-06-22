import { IEpisode, IPod } from '../schema/Schema'
import { Episode } from '../model/Episode'

interface CreateEpisodeArgs {
  pod: IPod
  file: string
  image: string
}

interface UpdateEpisodeArgs {
  id: string
  pod: IPod
  file: string
  image: string
}

const resolvers = {
  createEpisode: (args: CreateEpisodeArgs) => {
    const { pod, file, image } = args
    const episode = new Episode({
      pod,
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
        pod: args.pod,
        file: args.file,
        image: args.image,
        updated: new Date()
      })
    })
  }
}

export default resolvers
