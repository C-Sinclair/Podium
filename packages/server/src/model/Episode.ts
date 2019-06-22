import { model, Model, Schema, Types } from 'mongoose'
import { IEpisode } from '../schema/Schema'

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
