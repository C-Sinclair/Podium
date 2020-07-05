<script>
    import { socket } from '../state'

    export let code

    const channel = socket.channel(`chat:${code}`, {})
    channel.join()
        .receive("ok", res => { 
            console.log("Joined successfully ", res) 
        })
        .receive("error", () => { 
            console.log("Unable to join") 
        })
</script>

<h1>Chat</h1>

<h6>{code}</h6>


<p>Fetching chat room...</p>