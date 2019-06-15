import { ChangeEvent, Dispatch, SetStateAction } from "react"

type AppProps = {
    user: User
    sessionId?: number
}

type HeaderProps = {
    name: string
    onNameChange: (name: string) => void
}

type SidebarProps = {
    selected?: number
    onSelect: (key: number) => void
}

type PluginsProps = {}

type WorkspaceProps = {}

type WorkspaceState = {}
  
type MixerProps = {
    tracks?: [TrackProps]
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

type EQ = {
    master: number,
    hi: number,
    mid: number,
    low: number
}