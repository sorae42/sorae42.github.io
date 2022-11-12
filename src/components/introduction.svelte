<script>
    const social = [
        {href: "https://twitter.com/astr3me_dayo", icon: "twitter"},
        {href: "https://ko-fi.com/shigukk", icon: "coffee"},
        {href: "https://www.youtube.com/channel/UCITM2whX5c-88KPL56ndUlw", icon: "youtube-play"},
        {href: "https://github.com/skyventuree", icon: "github"},
        {href: "mailto:bonniefoxy2009@gmail.com", icon: "envelope"},
    ]
</script>

<div id="intro">
    <span id="greet">
        <h2>Greetings,</h2>
        <h1>my name is <span id="name">Sora</span>.</h1>
    </span>
    <br>
    <p>I'm a freelance developer and a content creator.</p>
    <span id="social">
        {#each social as links}
            <a href="{links.href}"><i class="fa fa-{links.icon}"></i></a>
        {/each}
    </span>
</div>

<style lang="scss">
    div#intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        margin: 0 auto;
        padding-left: 5vw;

        span#greet {
            text-align: left;
        }

        h1 > span#name {
            background: linear-gradient(to right, #9939FF, #5151FF);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    h1 {
        font-size: 3.2em;
        margin-top: -42px;
    }

    #social {
        display: flex;
        flex-direction: row;
        width: 30vw;
        padding-top: 50px;

        a {
            padding-left: 12px;
            padding-right: 12px;
            
            i {
                color: white;
                font-size: 40px !important;
                
                &:hover {
                    color: #416ddf;
                }
            }
            
        }
    }


</style>