<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<style>
    .screenshot {
        transition: all 0.3s ease;
        max-width: 12em;
        padding: 0.2rem;
    }

    .logo {
        display: center;
        margin: auto;
        max-width: 20em;
        height: auto;

    }

    .screenshot:hover {
        transform: translateY(-10px);
    }
</style>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <img class="logo" alt="logo" src="/img/pip2-logo.png"><hr><br>
        <p class="text-center"></p><br>
        <p class="text-center">This is also a game where you need to take care of a mouse named... Well, Pip. Feed him or he'll die. It's quite similar to the first one actually. The only difference is that his one runs in HD and doesn't require Python or an ESP32. There's a lot planned for this game, but due to school I sadly have to delay these updates.</p><br>
        <div style="display:flex; justify-content: center;">
            <p>A small list of updates planned: <br>
                • a warioware-esque minigame gamemode called "pip's game spree"<br>
                • leaderboard for global players (maybe)<br>
                • customization / accessories for Pip<br>
                • an ingame currency<br>
                • a better touchscreen support<br>
                • house customization</p>
        </div><br>
        <p class="text-center" style="font-size: 2em;"><b>Screenshots:</b></p>
        <div style="display: flex; justify-content: center;">
            <img class="screenshot" src="https://img.itch.zone/aW1hZ2UvMzg2NDU5OC8yMzQxMjUzNC5wbmc=/original/HvUC40.png" alt="Main menu of game">
            <img class="screenshot" src="https://img.itch.zone/aW1hZ2UvMzg2NDU5OC8yMzQxMjUzMy5wbmc=/original/BWlIs6.png" alt="Sidebar">
            <img class="screenshot" src="https://img.itch.zone/aW1hZ2UvMzg2NDU5OC8yMzQxMjUzMi5wbmc=/original/PIa7vE.png" alt="Food and topbar">
        </div><br>
        <p class="text-center">For extra info and/or to play the game, you can go to the itch.io page here:</p>
        <div style="display: flex; justify-content: center;">
            <iframe title="itch embed" frameborder="0" src="https://itch.io/embed/3864598?border_width=5&amp;bg_color=965a0f&amp;fg_color=f8f9fa&amp;link_color=457cff&amp;border_color=875b26" width="560" height="175"><a href="https://j4y-boi.itch.io/pip-the-mouse-2">Pip the Mouse 2 by J4y_boi</a></iframe>
        </div>
            <br><hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="https://github.com/j4y-boi/Pip-the-Mouse-Godot">
                <button class="relative overflow-hidden rounded bg-blue-500 px-5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">GitHub Repo</button>
            </a>
            <a href="javascript:history.back()">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>    