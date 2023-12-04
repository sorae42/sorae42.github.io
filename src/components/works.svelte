<script>
    import F_p5cc from "../featured/p5cc.svelte";
    import F_yukkuri from "../featured/yukkuri.svelte";
</script>

<div id="works">
    <F_p5cc />
    <br />
    <F_yukkuri />
</div>

<style lang="scss">
    @font-face {
        font-family: "KoreanKRSM";
        font-style: normal;
        src: url("/fonts/KoreanKRSM.ttf") format("truetype");
    }

    div#works {
        padding: 2em;
        padding-top: 0;

        @include for_breakpoint(mobile) {
            padding: 1em;
        }
    }
</style>
