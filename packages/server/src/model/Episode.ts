import { model, Model, Schema } from 'mongoose'
import { IEpisode } from '../schema/Schema'
import { Pod } from './Pod'

const episodeSchema = new Schema({
  id: String,
  pod: Pod,
  file: String,
  image: String,
  created: Date,
  updated: Date
})

export const Episode: Model<IEpisode> = model<IEpisode>('Episode', episodeSchema)
