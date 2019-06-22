import { Model, model, Schema, Types } from 'mongoose'
import { IPodcast } from '../schema/Schema'

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
