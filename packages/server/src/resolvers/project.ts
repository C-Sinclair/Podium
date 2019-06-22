import { IUser, IProject } from '../schema/Schema'
import { Project } from '../model/Project'

interface CreateProjectArgs {
  user: IUser
  name: string
}

interface UpdateProjectArgs {
  id: string
  name: string
}

const resolvers = {
  createProject: (args: CreateProjectArgs) => {
    const { user, name } = args
    const project = new Project({
      user,
      name,
      created: new Date()
    })
    return project
      .save()
      .then((result: IProject) => result)
      .catch((err: Error) => {
        throw err
      })
  },
  updateProject: (args: UpdateProjectArgs) => {
    Project.findOne({ id: args.id }).then((project: IProject) => {
      return project.update({
        name: args.name,
        updated: new Date()
      })
    })
  }
}

export default resolvers
