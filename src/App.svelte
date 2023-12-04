<script>
    import Intro from "./components/introduction.svelte";
    import Works from "./components/works.svelte";

    let year = new Date().getFullYear();
</script>

<Intro /> <!-- This is a header but I'm too lazy to change the name, lol.-->
<Works />

<div id="copyright">
    © {year} sorae42. All right reserved.<br>
    All assets are under fair use.
</div>

<br />

<style lang="scss">
    div#copyright {
        text-align: center;
        color: gray;
    }
</style>
