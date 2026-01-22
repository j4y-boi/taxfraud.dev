<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<style>
    .screenshot {
        transition: all 0.3s ease;
        max-width: 15%;
    }

    .logo {
        display: block;
        margin: auto;
        max-width: 50%;
        height: auto;

    }

    .screenshot:hover {
        transform: translateY(-10px);
    }
</style>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <h1 class="text-center"><img class="logo" alt="logo" src="/img/pip/pip-logo.png"></h1><hr><br>
        <p class="text-center">Pip the mouse was one of the first games I ever wrote. It was made for Hackapet, which was a Hack Club event where you needed to write a game for a custom ESP32-based tamagotchi-like gaming system!</p><br>
        <p class="text-center">This is a game where you need to take care of a mouse named... Well, Pip. If you didn't feed him enough or fed him too much, gave him too much or little exercise he would die.</p><br>
        <p class="text-center" style="font-size: 2em;"><b>Screenshots:</b></p>
        <div style="display: flex; justify-content: center;">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot1.png" alt="Pip in a house with dark walls">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot2.png" alt="Pip in a house with light walls">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot3.png" alt="Pip in a house with blue walls">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot4.png" alt="Hunger timer showcase">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot5.png" alt="PIP IS HUNGRY notification">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot6.png" alt="Action menu">
           <img class="screenshot" src="https://raw.githubusercontent.com/j4y-boi/pip-the-mouse/refs/heads/main/readme-assets/screenshots/screenshot7.png" alt="Pip is dedd">
        </div><br><hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="https://github.com/j4y-boi/pip-the-mouse">
                <button class="relative overflow-hidden rounded bg-blue-500 px-5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">GitHub Repo</button>
            </a>
            <a href="javascript:history.back()">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>    