import { Model, model, Schema } from 'mongoose'
import { IPod } from '../schema/Schema'
import { User } from './User'

const podSchema = new Schema({
  id: String,
  user: User,
  rss: String,
  image: String,
  created: Date,
  updated: Date
})

export const Pod: Model<IPod> = model<IPod>('Pod', podSchema)
