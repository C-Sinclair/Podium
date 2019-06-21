import React, { FunctionComponent } from 'react'
import { TrackProps, MixerProps } from '../../types/props'
import { IoIosAddCircle as Plus } from 'react-icons/io'
import { compareTracks as compare } from '../../util/array'

const Mixer: FunctionComponent<MixerProps> = ({ tracks }) => {
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
