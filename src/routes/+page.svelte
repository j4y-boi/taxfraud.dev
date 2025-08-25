<script lang="ts">
    import Typewriter from '$lib/Typewriter.svelte';
    import TyperwriterText from '$lib/TyperwriterText.svelte';
    import Bottomfooter from '$lib/bottomfooter.svelte';

    let counter = $state(0);
    let counterText = $state('');
    function increment() {
        counter += 1;
        counterText = "Woah, you clicked... Something " + counter + " times! (Maybe clicking to 100 will do something?)";
        if (counter === 100) {
            window.location.href = "/clickd";
        }
    }

    const splash = ["Welcome to Pizza hut what can I","number 15 burger king foo","Now gluten free!","Tax fraud is quite cool"]
    function randomoption(list: string | any[]) {
        let i = Math.floor(Math.random() * list.length);
        return list[i];
    }
</script>

<!-- lets replace links with this sometime later: on:click={() => window.location.href = '/'} -->

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter text="Welcome to my site!"/>
        <TyperwriterText speedmax={100} text={randomoption(splash)+"ëErr...ëWelcome to my site!"}/>
        <p class="text-center"></p>
        <p class="text-center">This is the internet equivalent of the small storage unit I'm renting (Figuratively)</p>
        <p class="text-center" title="Fun fact: I started out coding on Scratch!">I've been coding since 2020, so that's cool I guess...</p>
        <p class="text-center">{counterText}</p><br>

        <div class="flex justify-center p-8 center">
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <a href="/info">Info / Contact</a>
            </button>
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <a href="/now">Now</a>
            </button>
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <a href="/projects">My projects</a>
            </button>
        </div>
        <div class="flex justify-center p-8">
            <button class="transition active:scale-95" onclick={increment}>�</button>
        </div>
        
    </div>
    <Bottomfooter/>
</div>
