<div id="yukkuri">
    <div></div>
    <div class="content">
        <h1>Touhou Yukkuri in Minecraft</h1>
        <p><strong>Take it Easy in Minecraft! <br>Add the Touhou Yukkuri into your Minecraft world.</strong></p>
        <a href="https://modrinth.com/mod/yukkuri">
            <img src="../assets/dl_modrinth.png" alt="Modrinth download button">
        </a>
    </div>
</div>

<!-- FIXME: The mobile bg image make the text hard to read -->

<style lang="scss">
    div#yukkuri {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        height: 20em;
        background-image: url("../assets/yukkuri-promotion-desktop.png");
        background-position: center;
        background-size: cover;
        
        padding: 4em;
        
        border-radius: 10px;
        text-shadow: 2px 2px 4px black;

        .content {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            box-shadow: none;
            width: 50%;

            a > img {
                width: 30%;

                @include for_breakpoint(mobile) {
                    width: 42%;
                }
            }
        }

        p {
            font-size: 1.2em;
        }

        @include for_breakpoint(mobile tablet) {
            flex-direction: column;
            align-items: center;

            background-image: url("../assets/yukkuri-promotion-mobile.png");

            .content {
                width: 100%;
            }
        }
    }
</style>