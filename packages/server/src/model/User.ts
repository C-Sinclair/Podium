import { Schema, model, Model } from 'mongoose'
import { IUser } from '../schema/Schema'

const UserSchema: Schema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: Date
})

export const User: Model<IUser> = model<IUser>('User', UserSchema)
