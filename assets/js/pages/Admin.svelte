<script>
    import { socket } from '../state'
    const channel = socket.channel('room:admin', {})
    channel.join()
        .receive("ok", res => { 
            console.log("Joined successfully ", res) 
        })
        .receive("error", () => { 
            console.log("Unable to join") 
    })
</script>

<h1>Admin</h1>