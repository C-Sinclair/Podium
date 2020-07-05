import { writable } from 'svelte/store';
import { socket } from '../state/socket'

const PODUSER = 'podium-token'
const accessToken = localStorage.getItem(PODUSER)
console.log(accessToken)
const { subscribe, set } = writable()

const channel = socket.channel('auth:init')
channel.join()
    .receive('ok', () => {
        console.log('Joined auth channel')
        if (accessToken) {
            channel
                .push('login', { token: accessToken })
                .receive('ok', ({ username, id, access_token }) => {
                    localStorage.setItem(PODUSER, access_token)
                    set({username, id, token: access_token })
                })
        }
    })
    .receive('error', () => console.log('Unable to join auth channel'))

const signin = ({ username, password }) => channel
    .push('login', { username, password })
    .receive('ok', ({ username, id, access_token }) => {
        localStorage.setItem(PODUSER, access_token)
        set({username, id, token: access_token})
    })
    .receive('error', console.error)

const signout = () => {
    localStorage.removeItem(PODUSER)
    set(null)
}

export const user = {
    subscribe,
    signin,
    signout
}