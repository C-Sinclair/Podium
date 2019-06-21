import React, { FunctionComponent } from 'react'
import { SideProps } from '../../types/props'

const Side: FunctionComponent<SideProps> = ({ open, track }) => {
  const className = open ? 'side open' : 'side closed'
  return (
    <section className={className}>
      <div>
        <h3>Options</h3>
      </div>

      <div>
        <h3>Plugins</h3>
      </div>
    </section>
  )
}

export default Side
