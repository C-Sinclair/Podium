import { TrackProps } from '../types/props'

export const compareTracks = (a: TrackProps, b: TrackProps) => {
  let comp = 1
  if (a.position < b.position) comp = -1
  return comp
}
