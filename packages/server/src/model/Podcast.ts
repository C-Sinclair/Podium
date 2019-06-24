import { Model, model, Schema, Types, Document } from 'mongoose'
import { IUser } from './User'

export interface IPodcast extends Document {
  _id: string
  user: IUser
  rss: string
  image: string
  created: Date
  updated: Date
}

const podcastSchema = new Schema({
  id: String,
  user: {
    ref: 'User',
    type: Types.ObjectId
  },
  rss: String,
  image: String,
  created: Date,
  updated: Date
})

export const Podcast: Model<IPodcast> = model<IPodcast>('Podcast', podcastSchema)
