import { IUser, IPod } from '../schema/Schema'
import { Pod } from '../model/Pod'

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
  createPod: (args: CreatePodArgs) => {
    // save the rss/image to their s3 bucket
    const { user, name, rss, image } = args
    const pod = new Pod({
      user,
      name,
      rss,
      image,
      created: new Date()
    })
    return pod
      .save()
      .then((result: IPod) => result)
      .catch((err: Error) => {
        throw err
      })
  },
  updatePod: (args: UpdatePodArgs) => {
    Pod.findOne({ id: args.id }).then((pod: IPod) => {
      return pod.update({
        name: args.name,
        rss: args.rss,
        image: args.image,
        updated: new Date()
      })
    })
  }
}

export default resolvers
