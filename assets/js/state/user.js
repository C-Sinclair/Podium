import { writable } from 'svelte/store';
import { socket } from '../state/socket'

const PODUSER = 'podium-username'
const username = localStorage.getItem(PODUSER)
const { subscribe, set } = writable(username)

const channel = socket.channel('auth:init', {})
channel.join()
    .receive('ok', () => console.log('Joined auth channel'))
    .receive('error', () => console.log('Unable to join auth channel'))

const signin = ({ username, password }) => channel
    .push('login', { username, password })
    .receive('ok', res => {
        localStorage.setItem(PODUSER, res.username)
        set(username)
    })
    .receive('error', console.error)

const signout = () => {
    localStorage.removeItem(PODUSER)
    set(null)
}

export const User = {
    subscribe,
    signin,
    signout
}