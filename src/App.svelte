<script>
    import { fly, scale } from "svelte/transition";
    import Intro from "./components/introduction.svelte";
    import Works from "./components/works.svelte";

    let year = new Date().getFullYear();
    let finishedLoading = false, isTransitionFinished = false;
    let loadingText;

    function onLoad() {
        loadingText.innerText = "Done!";
        setTimeout(() => {
            finishedLoading = true;
            setTimeout(() => {isTransitionFinished = true}, 240);
        }, 420);
    }
</script>

<svelte:window on:load={() => onLoad()}/>

{#if !finishedLoading}
    <div out:fly="{{ x: 10000, duration: 2500, opacity: 100 }}">
        <div class="loader"></div>
        <p bind:this={loadingText} id="loading-text">~ We are now preparing. Please watch warmly. ~</p>
    </div>
{/if}

{#if finishedLoading && isTransitionFinished}    
    <Intro />
    <Works />

    <div id="copyright">
        © {year} sorae42. PERSONA 5 © ATLUS.<br>
        Facebook © {year} Meta. All right reserved.<br>
        All assets are under fair use.
    </div>
{/if}

<style lang="scss">
    div.loader {
        position: fixed;
        width: 90vmax;
        height: 100vh;
        left: 42vw;
        box-shadow: 0 0 24px rgb(0, 0, 0);
        background-color: aquamarine;
        transform: skewX(15deg) translateX(-160vmax);
        z-index: 200;
    }

    p#loading-text {
        position: fixed;
        background-color: #242424;
        width: 100vw;
        height: 100vh;
        z-index: 100;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        animation: flash 0.5s infinite;
    }

    @keyframes flash {
        0% { opacity: 100%; }
        50% { opacity: 50%; }
        100% { opacity: 100%; }
    }

    div#copyright {
        text-align: center;
        margin: 42px;
        color: gray;
    }
</style>
