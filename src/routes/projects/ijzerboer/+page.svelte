<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<style>
    .logo {
        width: 200%;
        height: auto;
        margin: auto;
    }

    .screenshot {
        transition: all 0.3s ease;
        max-width: 100%;        /* idk waht im doing */
    }

    .screenshot:active {
        max-width: 150%;
    }

    @media (min-width: 768px) {
        .logo {
            width: 60%;
        }

        .screenshot {
            transition: all 0.3s ease;
            max-width: 50%;
        }

        .screenshot:active {
            max-width: 75%;
        }
    }

</style>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <img class="logo" alt="logo" src="/img/ijzerboer_logo.png"><hr><br>
        <p class="text-center">Ijzerboer is a semi-open world simulator game where you play as the Ijzerboer (literally translates to metalfarmer) and collect scrap metal for a living! Explore neighbourhoods, visit shops like the "Kwik", "Koolruit" and more!</p><br>
        <p class="text-center">I'm developing this game with a <a href="https://github.com/kobegeens" title="Kobe Geens"><u>a friend of mine</u></a>. This game is still under active development and doesn't have implemented gameplay yet.</p><br>
        <p class="text-center" style="font-size: 2em;"><b>Screenshots:</b></p>
        <div class="text-center">none yet, stay tuned though</div><br>
        <div style="display: flex; justify-content: center;">
            <img title="click on me!" src="/img/ijzerboer.png" class="screenshot" alt="wip cover">
        </div><br><hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="https://github.com/brooddoos/Ijzerboer">
                <button class="relative overflow-hidden rounded bg-blue-500 px-5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">GitHub Repo</button>
            </a>
            <a href="javascript:history.back()">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>    