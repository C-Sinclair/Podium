import { Schema, Model, model, Types, Document } from 'mongoose'
import { IUser } from './User'

export interface IProject extends Document {
  id: string
  user: IUser
  name: string
  created: Date
  updated: Date
}

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
