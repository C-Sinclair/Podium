import { buildSchema } from 'graphql'
import { Document } from 'mongoose'

export interface IUser extends Document {
  id: string
  name: string
  email: string
  password: string
  created: Date
}

export interface IProject extends Document {
  id: string
  user: IUser
  name: string
  created: Date
  updated: Date
}

export interface IPod extends Document {
  _id: string
  user: IUser
  rss: string
  image: string
  created: Date
  updated: Date
}

export interface IEpisode extends Document {
  _id: string
  pod: IPod
  file: string
  image: string
  created: Date
  updated: Date
}

export const schema = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String
        password: String
        created: Date
    }

    type Project {
        _id: ID!
        user: User!
        name: String
        created: Date
        updated: Date
    }

    type Pod {
        _id: ID!
        user: User!
        rss: String
        image: String
        created: Date
        updated: Date
    }

    type Episode {
        _id: ID!
        pod: Pod!
        file: String
        image: String
        created: Date
        updated: Date
    }
`)
