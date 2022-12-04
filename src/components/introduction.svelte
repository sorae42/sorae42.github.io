<script>
    const social = [
        {href: "https://twitter.com/astr3me_dayo", icon: "twitter"},
        {href: "https://ko-fi.com/shigukk", icon: "coffee"},
        {href: "https://www.youtube.com/channel/UCITM2whX5c-88KPL56ndUlw", icon: "youtube-play"},
        {href: "https://github.com/sorae42", icon: "github"},
        {href: "mailto:bonniefoxy2009@gmail.com", icon: "envelope"},
    ]
</script>

<div id="intro">
    <span id="greet">
        <h2>Greetings,</h2>
        <h1>my name is <span id="name">Sora</span>.</h1>
    </span>
    <p>I'm a freelance developer and a content creator.</p>
    <span id="social">
        {#each social as links}
            <a href="{links.href}"><i class="fa fa-{links.icon}"></i></a>
        {/each}
    </span>
</div>

<style lang="scss">
    $anim: cubic-bezier(0.075, 0.82, 0.165, 1);

    div#intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        height: 100vh;
        margin: 0 auto;
        margin-left: 5vw;

        span#greet {
            text-align: left;
        }

        h1 > span#name {
            color: #416ddf;
        }

        @include for_breakpoint(mobile) {
            p { text-align: center; }
        }

        @for $i from 1 through 3 {
            & > *:nth-child(#{$i}) {
                animation: slideIn #{calc($i / 2)}s #{$anim};
            }
        }
    }

    @keyframes slideIn {
        from { transform: translateX(420px); }
        to   { transform: translateX(0px); }
    }

    h1 {
        font-size: 3.2em;
        margin-top: -30px;
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

        @include for_breakpoint(mobile) {
            width: 80vw;
            align-items: center;
        }
    }


</style>