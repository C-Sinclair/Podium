<script>
    import { User } from '../state'

    let username
    let password    

    const submit = () => User.signin({ username, password })
</script>

<form>
    <label for="username-input">Username</label>
    <input bind:value={username} />
    <label for="password-input">Password</label>
    <input bind:value={password} type="password" />

    <button on:click={submit}>Login</button>
</form>

<style>
    form {
        min-width: 400px;
        width: 50%
    }
</style>