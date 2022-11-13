<script>
    import Intro from "./components/introduction.svelte";
    import Works from "./components/works.svelte";

    let year = new Date().getFullYear();
</script>

<Intro />
<Works />

<div id="copyright">
    © {year} sorae42. PERSONA 5 © ATLUS.<br>
    Facebook © {year} Meta. All right reserved.<br>
    All assets are under fair use.
</div>

<style lang="scss">
    div#copyright {
        text-align: center;
        margin: 42px;
        color: gray;
    }
</style>
