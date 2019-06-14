import { ChangeEvent, Dispatch, SetStateAction } from "react"

type AppProps = {
    user: User
    sessionId?: number
}

type HeaderProps = {
    name: string
    onNameChange: (name: string) => void
}
  
type MixerProps = {
    tracks: [TrackProps?]
}

type TrackProps = {
    name: string
    position: number
    volume: number
}
  
type User = {
    name?: string
    id: number
    token: string
}