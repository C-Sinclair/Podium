import { Schema, Model, model } from 'mongoose'
import { IProject } from '../schema/Schema'
import { User } from './User'

const ProjectSchema = new Schema({
  id: String,
  user: User,
  name: String,
  created: Date,
  updated: Date
})

export const Project: Model<IProject> = model<IProject>('Project', ProjectSchema)
