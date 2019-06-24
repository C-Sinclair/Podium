import 'dotenv/config'
import * as Mongoose from 'mongoose'
import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import * as depthLimit from 'graphql-depth-limit'
import * as cors from 'cors'
import { createServer } from 'http'
import * as compression from 'compression'

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}/podium`
const PORT = process.env.PORT || 3000

const App: express.Application = express()

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
})

App.use('*', cors())
App.use(compression())

server.applyMiddleware({
  app: App,
  path: '/data'
})

const http = createServer(App)

Mongoose.connect(MONGO_URI, {
  useNewUrlParser: true
})
  .then(() => {
    console.log('Connected to MongoDB')
    http.listen(
      {
        port: PORT
      },
      () => {
        console.log(`Server listening on port ${PORT}`)
      }
    )
  })
  .catch(err => console.error(err))
