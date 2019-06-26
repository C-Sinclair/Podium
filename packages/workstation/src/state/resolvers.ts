import gql from 'graphql-tag'

const getVolume = gql`
query Volume(trackId: trackId) {
    tracks($trackId) {
        volume @client
    }
}
`

export const resolvers = {
  Mutation: {
    setVolume: (parent, { volume }, { cache }, info) => {
      cache.writeData({
        data: {
          volume
        }
      })
      return null
    }
    // addTrack:
    // removeTrack:
  },
  Query: {
    getVolume: (parent, { trackId }, { cache }) => {
      const { volume } = cache.readQuery<any>({
        query: getVolume
      })
    },
    getTracks: (parent, args, { cache }) => {
      const { tracks } = cache.readQuery<any>({
        query: gql`
          query Tracks {
            tracks @client
          }
        `
      })
    }
  }
}
