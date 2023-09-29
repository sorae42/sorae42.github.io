<div id="p5cc">
    <img src="../assets/p5cc-card.jpeg" alt="P5CC card sample" />
    <div class="content">
        <h3>~ Featured Project ~</h3>
        <h2>Persona 5 Calling Card Maker</h2>
        <p>
            For the sake of effortlessly making a calling card.
            <br />Sending your card to the darkest desire.
        </p>
        <span class="link">
            <a href="https://skyventuree.github.io/p5cc"
                ><button>Make yours now!</button></a
            >
        </span>
        <br /><br />
        <span>PERSONA 5 © ATLUS</span>
    </div>
</div>

<style lang="scss">
    div#p5cc {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        font-family: "KoreanKRSM", sans-serif;
        background-color: red;
        background-image: url("../assets/p5cc-bg.png");
        background-position: center;
        padding: 4em;

        border-radius: 10px;

        color: white;
        text-shadow: 2px 2px black;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: black;

        .content {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            box-shadow: none;
        }

        p {
            font-size: 1.2em;
        }

        img {
            transform: rotateX(42deg) rotateY(-10deg) rotateZ(20deg);
            filter: drop-shadow(12px 24px 6px rgb(118, 31, 31));
            padding-right: 42px;
            width: 42%;
            height: 42%;
        }

        button {
            font-family: inherit;
            font-size: inherit;

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

        @include for_breakpoint(mobile tablet) {
            flex-direction: column;
            align-items: center;

            img {
                width: 75%;
            }
        }
    }
</style>
