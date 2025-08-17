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
        <Typewriter text="About me"/> <hr><br>
        <p class="text-center">Hi! I'm j4y_boi, a teen from Belgium, born in the Netherlands who picked up coding at 10 years old.</p>
        <p class="text-center">I started off coding in 2020 on <a href="https://scratch.mit.edu/users/j4y_boi/"><u>Scratch</u></a> what (for what it's worth) was a great way to start programming!</p>
        <p class="text-center">Afterwards (17 November 2021 according to my files) I began making basic sites in HTML with tutorials on the internet and a random app.
        I also started programming Arduino's at school using Blockly (which is a visual programming language that can be converted to C++.</p>
        <p class="text-center">Now, in 2025, I'm running my own site and making projects for fun! (I'll probably make less, I need to focus on school lmfao)</p>
        <br><p class="text-center"><b>Programming languages I know/use:</b></p>
        <p class="text-center">- Python | GDScript | HTML | JavaScript | CSS (Limited) -</p><br>
        <p class="text-center"><b>Programming languages I'm currently learning:</b></p>
        <p class="text-center">- Java | CSS (more extensive) | GDScript -</p><br>
        <p class="text-center"><b>Tools I use for my projects:</b></p>
        <p class="text-center">- VSCode, IntelliJ IDEA, Godot (Coding) | Paint.NET, Canva, Figma (Art) -</p><br><hr><br> <!-- This is probably breaking 30+ design rules, but I could give less of a crap at the moment -->
        <div style="display: flex; justify-content: center;">
            <button class="bg-white  text-black font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="/">Return home</a>
            </button>
            <button class="bg-blue-500  text-white font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="https://www.linktr.ee/j4y_boi">My Linktree</a>
            </button>
            <button class="bg-blue-500 text-white font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="https://j4y-boi.itch.io/">My itch.io</a>
            </button>
            <button class="bg-blue-500 text-white font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="https://github.com/j4y-boi">My Github</a>
            </button>
            <button class="bg-blue-500  text-white font-bold p-4 rounded hover:scale-105" style="margin-right: 10px">
                <a href="mailto:j4y@taxfraud.dev">My email</a>
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