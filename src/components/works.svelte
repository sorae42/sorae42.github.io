<script>
    import { otherWorks } from "../extras/worklist.json";
    import F_p5cc from "./featured.svelte";

    const linkType = {
        download: ["arrow-circle-down", "Download"],
        visit: ["external-link", "Visit"],
    };
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div id="works">
    <F_p5cc />
    <br />
    <div id="other-works">
        {#each otherWorks as project}
            <div class="content">
                <div class="details">
                    <h2>
                        {#if project.icon !== ""}
                            <img src="/icons/{project.icon}" class="app-icon" />
                        {/if}
                        {project.name}
                    </h2>
                    <p>{project.description}</p>
                </div>
                <span class="link">
                    {#each project.links as link}
                        <a href={link.link}>
                            <button>
                                <i class="fa fa-{linkType[link.type][0]}" />
                                <span class="divider" />
                                <span>{linkType[link.type][1]}</span>
                            </button>
                        </a>
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
        padding: 2em;
        padding-top: 0;

        .header {
            margin-left: 5vw;
            text-align: left;

            i {
                font-size: 36px !important;
            }
        }

        @include for_breakpoint(mobile) {
            padding: 1em;

            .header {
                text-align: center;

                i {
                    display: none;
                }
            }
        }
    }

    div#other-works {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;

        @include for_breakpoint(tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @include for_breakpoint(mobile) {
            grid-template-columns: auto;
        }
    }

    div.content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        padding: 0 5%;

        background-color: #363636;

        div.details {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h2 {
                margin-bottom: 0;

                img {
                    width: 1em;
                    transform: translateY(4px);
                }
            }
        }

        span.link {
            display: flex;
            justify-content: center;

            .divider {
                width: 6px;
            }

            button {
                background-color: #424242;
                margin: 10px;
            }
        }

        @include for_breakpoint(mobile) {
            text-align: center;
            padding: 0;
        }
    }
</style>
