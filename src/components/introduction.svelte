<script>
    const social = [
        { href: "https://ko-fi.com/shigukk", icon: "coffee" },
        {
            href: "https://www.youtube.com/channel/UCITM2whX5c-88KPL56ndUlw",
            icon: "youtube-play",
        },
        { href: "https://github.com/sorae42", icon: "github" }
    ];
</script>

<div id="intro">
    <span id="greet">
        <h1 id="name"><img src="../assets/nitori.png" alt="nitori in chalkno style"> Sora</h1>
    </span>
    <span id="social">
        {#each social as links}
            <a href={links.href}><i class="fa fa-{links.icon}" /></a>
        {/each}
    </span>
</div>

<style lang="scss">
    div#intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 5em;
        padding: 12px 4em;
        box-sizing: border-box;

        h1#name {
            color: #00d9ff;
            margin: 0;

            img {
                height: 1em;
            }
        }

        @include for_breakpoint(mobile) {
            padding: 12px 2em;
        }
    }

    #social {
        display: flex;

        a {
            padding: 0 12px;

            i {
                color: white;
                font-size: 33px !important;

                &:hover {
                    color: #416ddf;
                }
            }
        }
    }
</style>
