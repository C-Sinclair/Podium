import React, { FunctionComponent } from 'react'
import { VolumeSliderProps } from '../types/props'

const VolumeSlider: FunctionComponent<VolumeSliderProps> = ({ volume, onChange }) => {
  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        onChange={e => onChange(parseInt(e.target.value))}
        value={volume}
      />
    </div>
  )
}

export default VolumeSlider
