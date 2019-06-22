import 'dotenv/config'
import * as Mongoose from 'mongoose'
import * as express from 'express'
import * as expressgraphql from 'express-graphql'
import { schema } from './schema/Schema'
import resolvers from './resolvers'

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}/podium`
const PORT = process.env.PORT || 3000

function main() {
  const App: express.Application = express()

  App.use('/data', (req: express.Request, res: express.Response) => {
    expressgraphql({
      schema,
      rootValue: resolvers,
      graphiql: true
    })(req, res)
  })

  App.listen(3000, () => {
    console.log('Server running')
  })

  Mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
  })
    .then(() => {
      console.log('Connected to MongoDB')
      App.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
      })
    })
    .catch(err => console.error(err))
}

main()
