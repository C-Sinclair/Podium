import 'dotenv/config'
import * as Mongoose from 'mongoose'
import express from 'express'
import { GraphqlSchema } from 'graphql'
import expressgraphql from 'express-graphql'
import { RootQuery, RootMutation } from './schema/schema'

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}/test?retryWrites=true&w=majority`

const schema = new GraphqlSchema({
  query: RootQuery,
  mutation: RootMutation
})

function main() {
  const db = Mongoose.connect(MONGO_URI)
  const App: express.Application = express()

  App.use('/graphql', (req: express.Request, res: express.Response) => {
    expressgraphql({
      schema,
      context: {
        db
      },
      graphiql: true
    })(req, res)
  })

  App.listen(80, () => {
    console.log('Server running')
  })
}

main()
