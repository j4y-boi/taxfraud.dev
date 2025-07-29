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

<script lang="ts">
    import Typewriter from '$lib/Typewriter.svelte';
    import TyperwriterText from '$lib/TyperwriterText.svelte';

    let counter = $state(0);
    let counterText = $state('');
    function increment() {
        counter += 1;
        counterText = "Woah, you clicked... Something " + counter + " times! (Maybe clicking to 100 will do something?)";
        if (counter === 100) {
            window.location.href = "/clickd";
        }
    }

    const icons = ["❤️", "😭", "🥲", "🕑", "🥳"]
    const splash = ["Welcome to Pizza hut what can I-","Uhh...","Now gluten free!","Tax fraud is quite cool"]
    function randomoption(list: string | any[]) {
        let i = Math.floor(Math.random() * list.length);
        return list[i];
    }
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter text="Welcome to my site!"/>
        <TyperwriterText speedmax={100} text={randomoption(splash)+"ëWait noëWelcome to my site!"}/>
        <!--In retrospect, this wasn't that great of an idea.-->
        <!--<TyperwriterText text="bapanadaëErrrr... Wait...ëWelcome to my site?ëOh wait, that's what h1 is supposed to say...ëUhhhh, yeah I'm not quite sure what to say actually.ëI mean, that's how j4y coded me.ëLemme see if I have anything interessting for you...ëI'll be right back, but uh... If you reload the page... You'll need to listen to me all over again...ëGot it?ëCool.ëLoading 'The very cool thing' ëOkay, so I found that if you go to /fish you'll see something special... I'm, uhhh gonna depart now...ë "/>-->
        <p class="text-center"></p>
        <p class="text-center">This is the internet equivalent of the small storage unit I'm renting (Figuratively)</p>
        <p class="text-center" title="Fun fact: I started coding on Scratch!">I've been coding since 2020, so that's cool I guess...</p>
        <p class="text-center">{counterText}</p><br>

        <div class="flex justify-center p-8 center">
            <button class="bg-white  text-blue-600 font-bold p-4 rounded hover:scale-105" style="margin-right: 16px">
                <a href="https://github.com/j4y-boi">Check Out my Github</a>
            </button>
            <button class="bg-white  text-blue-600 font-bold p-4 rounded hover:scale-105" style="margin-right: 16px">
                <a href="/projects">My projects</a>
            </button>
        </div>
        <div class="flex justify-center p-8">
            <button class="hover:scale-105" onclick={increment}>�</button>
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
