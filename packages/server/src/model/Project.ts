import { Schema, Model, model, Types } from 'mongoose'
import { IProject } from '../schema/Schema'

const ProjectSchema = new Schema({
  id: String,
  user: {
    ref: 'User',
    type: Types.ObjectId
  },
  name: String,
  created: Date,
  updated: Date
})

export const Project: Model<IProject> = model<IProject>('Project', ProjectSchema)
