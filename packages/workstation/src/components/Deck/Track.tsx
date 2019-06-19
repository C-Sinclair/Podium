import React, { FunctionComponent } from 'react'
import { TrackProps } from '../../types/props'

const Track: FunctionComponent<TrackProps> = props => {
  const { name, volume } = props
  const onVolumeChange = (v: number) => {}
  return (
    <div className="track">
      <p>{name}</p>
      <div />
    </div>
  )
}

export default Track
