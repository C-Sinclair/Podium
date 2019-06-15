import React from 'react'
import { TrackProps, MixerProps } from '../types/props';

const compare = (a: TrackProps, b: TrackProps) => {
  let comp = 1
  if (a.position < b.position) comp = -1
  return comp
}

const Mixer: React.FunctionComponent<MixerProps> = ({ tracks }) => {
  if (!tracks || tracks.length == 0) 
    return (
      <h4>No tracks</h4>
    )
  tracks.sort(compare)

  return (
    <ul>
      {tracks.map((track: TrackProps) => (
        <li>{track.name}</li>
      ))}
    </ul>
  )
}

export default Mixer
