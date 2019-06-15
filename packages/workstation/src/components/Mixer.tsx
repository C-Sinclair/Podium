import * as React from 'react'

const compare = (a: TrackInfo, b: TrackInfo) => {
  let comp = 1
  if (a.position < b.position) comp = -1
  return comp
}

const Mixer: React.FunctionComponent<MixerProps> = props => {
  const { tracks } = props
  if (!tracks || tracks.size() == 0) 
    return (
      <h4>No tracks</h4>
    )
  tracks.sort(compare)

  return (
    <ul>
      {tracks.map((track: TrackInfo) => (
        <li>{track.name}</li>
      ))}
    </ul>
  )
}

export default Mixer
