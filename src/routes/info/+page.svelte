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
        <Typewriter text="Info"/>
        <p class="text-center"></p>
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