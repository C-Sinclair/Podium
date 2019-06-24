import { Schema, model, Model, Document } from 'mongoose'
export interface IUser extends Document {
  id: string
  name: string
  email: string
  password: string
  created: Date
}

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
