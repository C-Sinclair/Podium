import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type AppProps = {
  user: User
  sessionId?: number
}

type HeaderProps = {
  name: string
  onNameChange: (name: string) => void
}

enum SideOpen = {
  
}

type SideProps = {
  open: Boolean
  track?: TrackProps
}

type MixerProps = {
  tracks: TrackProps[]
}

type TrackProps = {
  name: string
  position: number
  volume: number
  current: Boolean
}

type DeckProps = {
  tracks: TrackProps[]
  playhead: number
  zoom: {
    x: number
    y: number
  }
  position: {
    x: number
    y: number
  }
}

type VolumeSliderProps = {
  volume: number
  onChange: (volume: number) => void
}

type User = {
  name?: string
  id: number
  token: string
}
