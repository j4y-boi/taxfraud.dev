<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<style>
    .screenshot {
        transition: all 0.3s ease;
        max-width: 24em;
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
        <img class="logo" alt="logo" src="/img/pip-desktop/logo.png"><hr><br>
        <p class="text-center">The mouse lives your desktop now, he'll keep you company while you work. Feed/play him with him, or not, he can't die in this version. He'll wander around on your screen while you work!</p><br>
        <p class="text-center" style="font-size:2em;">Watch the trailer here:</p><br>
        <div style="display:flex; justify-content: center;">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/o3zFl_8S51Q?si=aAXLqRJ_ztcn3ePs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        <p class="text-center" style="font-size: 2em;"><b>Some screenshots:</b></p>
        <div style="display: flex; justify-content: center;">
            <img class="screenshot" src="/img/pip-desktop/screenshot1.png" alt="Main menu of game">
            <img class="screenshot" src="/img/pip-desktop/screenshot2.png" alt="Sidebar">
            <img class="screenshot" src="/img/pip-desktop/screenshot3.png" alt="Food and topbar">
        </div><br>
        <p class="text-center">To download the game, head to the itch.io page here:</p>
        <div style="display: flex; justify-content: center;">
           <iframe title="itch embed" frameborder="0" src="https://itch.io/embed/5134985?linkback=true&amp;bg_color=4a5158&amp;fg_color=ffffff&amp;link_color=05a6f0&amp;border_color=73797e" width="552" height="167"><a href="https://j4y-boi.itch.io/pip-the-mouse-desktop-edition">Pip the Mouse: Desktop Edition by J4y_boi</a></iframe>
        </div>
            <br><hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="https://github.com/j4y-boi/pip-the-mouse-desktop-pet">
                <button class="relative overflow-hidden rounded bg-blue-500 px-5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">GitHub Repo</button>
            </a>
            <a href="javascript:history.back()">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>    