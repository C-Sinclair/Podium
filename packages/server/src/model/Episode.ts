import { model, Model, Schema, Types, Document } from 'mongoose'
import { IPodcast } from './Podcast'

export interface IEpisode extends Document {
  _id: string
  podcast: IPodcast
  file: string
  image: string
  created: Date
  updated: Date
}

const episodeSchema = new Schema({
  id: String,
  podcast: {
    ref: 'Podcast',
    type: Types.ObjectId
  },
  file: String,
  image: String,
  created: Date,
  updated: Date
})

export const Episode: Model<IEpisode> = model<IEpisode>('Episode', episodeSchema)
