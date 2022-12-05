<script>
    import { otherWorks } from "../extras/worklist.json";
    import F_p5cc from "./featured-works/p5cc.svelte";

    const linkType = {
        "download": ["arrow-circle-down", "Download"],
        "source"  : ["github", ""]
    };
</script>

<div id="works">
    <h1 class="header">my works<i class="fa fa-chevron-right"></i></h1>

    <F_p5cc />
    
    <div id="other-works">
        {#each otherWorks as project}
        <div class="content">
            <div class="details">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
            <span class="link">
                {#each project.links as link}
                <a href="{link.link}"><button>
                    {#if link.type === "link"}
                        Visit site<i class="fa fa-external-link"></i>
                    {:else}
                        <i class="fa fa-{linkType[link.type][0]}"></i>{linkType[link.type][1]}
                    {/if}
                </button></a>
                {/each}
                
            </span>
        </div>
        {/each}
        
    </div>
</div>

<style lang="scss">
    @font-face {
        font-family: "KoreanKRSM";
        font-style: normal;
        src: url("/fonts/KoreanKRSM.ttf") format("truetype");
    }
    
    div#works {
        .header {
            margin-left: 5vw;
            text-align: left;

            i { font-size: 36px !important; }

            @include for_breakpoint(mobile) {
                text-align: center;
                
                i { display: none; }
            }
        }
    }
    
    h1 {
        font-size: 3em;
    }

    div#other-works {
        display: grid;
        grid-gap: 20px;
        margin: 2em;
    }
</style>
