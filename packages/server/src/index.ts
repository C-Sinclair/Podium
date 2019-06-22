import 'dotenv/config'
import * as Mongoose from 'mongoose'
import * as express from 'express'
import { GraphQLSchema } from 'graphql'
import * as expressgraphql from 'express-graphql'
import { RootQuery, RootMutation } from './schema/schema'

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}/test?retryWrites=true&w=majority`

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

function main() {
  const db = Mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
  })
  const App: express.Application = express()

  App.use('/data', (req: express.Request, res: express.Response) => {
    expressgraphql({
      schema,
      context: {
        db
      },
      graphiql: true
    })(req, res)
  })

  App.listen(3000, () => {
    console.log('Server running')
  })
}

main()
