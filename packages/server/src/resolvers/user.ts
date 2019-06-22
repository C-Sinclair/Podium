import { User } from '../model/User'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IUser } from '../schema/Schema'

interface CreateUserArgs {
  name: string
  email: string
  password: string
}

interface LoginArgs {
  email: string
  password: string
}

const resolvers = {
  createUser: (args: CreateUserArgs) => {
    User.findOne({ email: args.email })
      .then((user: IUser) => {
        if (user) {
          throw new Error('User already exists')
        }
        return bcrypt.hash(args.password, 12)
      })
      .then((hashedPassword: string) => {
        const user = new User({
          email: args.email,
          name: args.name,
          password: hashedPassword
        })
        return user
          .save()
          .then((result: IUser) => {
            return { ...result, _id: result.id, password: '' }
          })
          .catch((err: Error) => {
            throw err
          })
      })
      .catch((err: Error) => {
        throw err
      })
  },
  login: (args: LoginArgs) => {
    const { email, password } = args
    User.findOne({ email }).then((user: IUser) => {
      if (!user) {
        throw new Error('User does not exist')
      }
      const passwordMatch = bcrypt.compare(password, user.password)
      if (!passwordMatch) {
        throw new Error('Password incorrect')
      }

      const token = jwt.sign(
        {
          userId: user.id,
          userEmail: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )
      return {
        userId: user.id,
        token,
        tokenExpiry: 1
      }
    })
  }
}

export default resolvers
