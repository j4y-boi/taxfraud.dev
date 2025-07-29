<svelte:head>
    <title>THE clicker game?</title>
    <style>        
        body {
            background-color: #00030d;
            font-family: 'Nunito', sans-serif;
            color:#7e86a3; 
        }

        h1 {
            margin: 0.1em 0;
            line-height: 1;
            font-size: 3rem;
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
    </style>
</svelte:head>
<script>
    import Typewriter from "$lib/Typewriter.svelte";

    let counter = $state(0);
    let multiplier = $state(1);
    let commentary = $state("");
    let last = 0;
    const text = ["Since, you're here clicking away, I figure I might as well tell you something. /fish is an interessting page :)","Are you... Planning on stopping anytime soon?", "1000? How much time have you wasted already?", "Yeah, I'm not stopping you.", "... Are you using an autoclicker?"]

    function up() {
        counter += multiplier;

        if (counter >= last + 250) {
            last += 250;
            multiplier += 1;
        }

        if (counter > 30) {
            commentary = text[0]
        }

        if (multiplier === 2) {
            commentary = text[0]
        } else if (multiplier === 5){
            commentary = text[2]
        } else if (multiplier === 4){
            commentary = text[1]
        } else if (multiplier === 8){
            commentary = text[3]
        } else if (multiplier === 10){
            commentary = ""
        } else if (multiplier === 13){
            commentary = text[4]
        }
    }
</script>

<Typewriter speedmax={50} text="Because you like clicking buttons so much :)"/>
<h3 class="text-white text-center">The very balanced™ clicker game!</h3>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <h3 class="text-white text-center">You've clicked the button {counter} times!</h3>
        <h3 class="text-white text-center">Current multiplier: {multiplier}x (+1 every 250 clicks)</h3>
        <h3 class="text-white text-center">{commentary}</h3>
        <div class=" flex justify-center p-8">
            <button class="bg-white  text-blue-800 font-bold p-4 rounded hover:scale-105" onclick={up}>
                Button
            </button>
        </div>
    </div>
</div>