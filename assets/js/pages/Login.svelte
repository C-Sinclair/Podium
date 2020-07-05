<script>
    import { user } from '../state'

    let username
    let password    

    const submit = e => {
        e.preventDefault()
        user.signin({ username, password })
    }
</script>

<div class="container">
    <form>
        <label for="username-input">Username</label>
        <input bind:value={username} />
        <label for="password-input">Password</label>
        <input bind:value={password} type="password" />

        <button on:click={submit}>Login</button>
    </form>
</div>

<style>
    .container {
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    form {
        min-width: 400px;
        width: 50%
    }
</style>