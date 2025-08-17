<svelte:head>
    <title>site 👍</title>
    <style>        
        body {
            background-color: #00030d;
            font-family: 'Nunito', sans-serif;
            color:#7e86a3;
            background-image: radial-gradient(#333 5%, transparent 0);
            background-size: 35px 35px; 
        }

        h1 {
            font-family: 'Bitcount Single', cursive;
            margin: 0.1em 0;
            line-height: 1;
            font-size: 5rem;
        }

        .center {
        margin: auto;
        width: 50%;
        border: 5px;
        border-color: #021147;
        padding: 10px;
        }

        .text_center{
            text-align: center;
        }

        .legal_disclaimer{
            font-size: 1em;
            color: #b5b5b5;
        }
    </style>
</svelte:head>

<script>
    import Typewriter from "$lib/Typewriter.svelte";

    const icons = ["❤️", "😭", "🥲", "🕑", "🥳"]

    /** congrats vs code quick fix
     * @param {string | any[]} list
     */
    function randomoption(list) {
        let i = Math.floor(Math.random() * list.length);
        return list[i];
    }
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <h1 class="text-center">Legally Distinct Animal Crossing</h1><hr><br>
        <p class="text-center">LDAC is the first game I ever wrote with Godot! It's was quite the learning experience, but do forgive me for all the bugs.</p>
        <p class="text-center">Because I don't want to retype my entire spiel, you can view all info on the itch.io page below!</p><br>
        <div style="display: flex; justify-content: center;">
            <iframe title="game" frameborder="0" src="https://itch.io/embed/3815431?border_width=5&amp;dark=true" width="560" height="175"><a href="https://j4y-boi.itch.io/ld-animal-crossing">Legally Distinct Animal Crossing by J4y_boi</a></iframe>
        </div><br>
        <div style="display: flex; justify-content: center;">
            <button class="bg-white  text-black font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="/projects">Return to projects</a>
            </button>
        </div>
    </div>
    <footer class="text-center p-10 flex flex-col items-center bg-great-blue-900 text-white">
        <div>
            Made with <span>{randomoption(icons)}</span> 
            <span>by <a href="https://www.linktr.ee/j4y_boi"><u>j4y_boi</u></a></span>
        </div>
        <p class="legal_disclaimer text-sm text-center">
            For legal reasons, all jokes made about tax fraud and other fraudulent acts related (but not limited to) taxes are satire. (lols)
        </p>
    </footer>
</div>    