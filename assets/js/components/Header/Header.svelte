<script>
    import { user } from '../../state'
</script>


<header>
    <h1>Podium</h1>
    <span>Step up...</span>
    {#if $user}
    <article class="user-profile">
        <img src={`/api/user/${$user.id}/image`} alt={$user.username}/>
        <legend>{$user.username}</legend>
    </article>
    {/if}
</header>

<style>
    header {
        position: relative;
        padding: 10px;
        display: flex;        
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-family: 'Modak', cursive;
        font-size: 3em;
        font-weight: 100;
    }
    .user-profile {
        position: absolute;
        right: 10px;
    }
    img {
        border-radius: 50px;
        width: 100px;
        height: 100px;
    }
</style>