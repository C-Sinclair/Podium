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

export interface IPodcast extends Document {
  _id: string
  user: IUser
  rss: string
  image: string
  created: Date
  updated: Date
}

export interface IEpisode extends Document {
  _id: string
  podcast: IPodcast
  file: string
  image: string
  created: Date
  updated: Date
}

export const schema = buildSchema(`
  scalar Date 
  
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

  type Podcast {
    _id: ID!
    user: User!
    rss: String
    image: String
    created: Date
    updated: Date
  }

  type Episode {
    _id: ID!
    podcast: Podcast!
    file: String
    image: String
    created: Date
    updated: Date
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiry: Int!
  }

  type RootQuery {
    episodes(podcastID: ID): [Episode]
    episode(id: ID!): Episode

    podcasts(userID: ID): [Podcast]
    podcast(id: ID!): Podcast

    projects(userID: ID): [Project]
    project(id: ID!): Project

    users: [User]
    user(id: ID!): User
    login(email: String!, password: String!): AuthData
  }

  input UserInput {
    name: String
    email: String
    password: String
  }
  
  input ProjectInput {
    userID: ID!
    name: String
  }

  input PodcastInput {
    userID: ID!
    name: String!
    rss: String!
    image: String
  }

  input EpisodeInput {
    podcastID: ID!
    file: String
    image: String
  }

  type RootMutation {
    createUser(input: UserInput): User
    createProject(input: ProjectInput): Project
    createPodcast(input: PodcastInput): Podcast
    createEpisode(input: EpisodeInput): Episode
  }
  
  schema {
      query: RootQuery
      mutation: RootMutation
  }
`)
