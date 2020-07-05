import phx from "phoenix"

export const socket = new phx.Socket('/socket', { token: window.userToken })
socket.connect()