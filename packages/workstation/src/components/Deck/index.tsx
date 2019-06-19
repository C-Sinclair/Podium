import React, { FunctionComponent } from 'react'
import Track from './Track'
import { TrackProps, DeckProps } from '../../types/props'
import { compareTracks as compare } from '../../util/array'

const Deck: FunctionComponent<DeckProps> = ({ tracks, playhead, zoom, position }) => {
  tracks.sort(compare)

  return (
    <section id="deck">
      <p>{name}</p>
      {tracks.map(track => (
        <Track name={track.name} volume={track.position} current={track.current} />
      ))}
    </section>
  )
}

export default Deck
