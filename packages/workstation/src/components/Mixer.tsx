import * as React from 'react'
import { TrackProps, MixerProps } from '../types/props'
import { IoIosAddCircle as Plus } from 'react-icons/io'

const compare = (a: TrackProps, b: TrackProps) => {
  let comp = 1
  if (a.position < b.position) comp = -1
  return comp
}

const Mixer: React.FunctionComponent<MixerProps> = props => {
  const { tracks } = props
  if (!tracks || tracks.length == 0)
    return (
      <section>
        <h4>No tracks</h4>
        <label htmlFor="addTrack">Add a new track</label>
        <Plus id="addTrack" />
      </section>
    )

  tracks.sort(compare)

  return (
    <section>
      <ul>
        {tracks.map((track: TrackProps) => (
          <li className={track.current ? 'selected' : ''}>{track.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default Mixer
