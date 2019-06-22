import React, { FunctionComponent } from 'react'
import VolumeSlider from './VolumeSlider'
import { TrackProps } from '../../types/props'

const Track: FunctionComponent<TrackProps> = props => {
  const { name, volume } = props
  const onVolumeChange = (v: number) => {}
  return (
    <div className="track">
      <VolumeSlider volume={volume} onChange={onVolumeChange} />
      <p>{name}</p>
    </div>
  )
}

export default Track