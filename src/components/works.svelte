<script>
    import { otherWorks } from "../extras/worklist.json";

    const linkType = {
        "download": ["arrow-circle-down", "Download"],
        "source"  : ["github", ""]
    };
</script>

<div id="works">
    <h1>my works <i class="fa fa-chevron-right"></i></h1>
    
    <div id="featured-work">
        <img src="../assets/p5cc-card.jpeg" alt="P5CC card sample" />
        <div class="content">
            <h3>~ Featured Project ~</h3>
            <h1>Persona 5 Calling Card Maker</h1>
            <p>
                For the sake of effortlessly making a calling card.
                <br />Sending your card to the darkest desire.
            </p>
            <span class="link">
                <a href="https://skyventuree.github.io/p5cc"><button>Visit site<i class="fa fa-external-link" /></button></a>
                <a href="https://github.com/skyventuree/p5cc"><button><i class="fa fa-github" />Source code</button></a>
            </span>
        </div>
    </div>
    
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
        h1, h2, p {
            margin-left: 5vw;
        }
    }
    
    h1 {
        font-size: 3em;
    }
     
    div.content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        border-radius: 10px;
        padding-right: 4%;

        h1, p {
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 100px;
        }

        div.details {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        span.link {
            display: flex;
            justify-content: center;

            button {
                margin: 10px;
            }
        }
    }

    div#other-works {
        display: grid;
        grid-gap: 20px;
        margin: 2em;
    }
    
    /* For P5CC */
    div#featured-work {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        
        font-family: "KoreanKRSM", sans-serif;
        background-color: red;
        background-image: url("../assets/p5cc-bg.png");
        background-position: center;
        padding: 50px 0 50px 0;
        
        color: white;
        text-shadow: 2px 2px black;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: black;

        .content {
            flex-direction: column;
            justify-content: left;
            text-align: center;
            box-shadow: none;
        }
        
        p {
            font-size: 1.5em;
        }
        
        img {
            transform: rotateX(42deg) rotateY(-10deg) rotateZ(20deg);
            filter: drop-shadow(2px 30px 10px rgb(174, 45, 45));
            object-fit: contain;
            padding-right: 5%;
        }
        
        button {
            font-family: inherit;
            font-size: inherit;
            
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            
            background-color: #fff;
            border: 2px solid #000;
            border-radius: 0;
            box-shadow: 4px 4px #000;
            color: #000;
            padding: 10px;
            outline: 0;
            
            &:hover {
                filter: invert(1);
            }
        }
    }
</style>
