<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<style>
    .notimg {
        transition: all 0.3s ease;
        max-width: 50%;
        margin: 0 auto;
        display: block;
    }

    .notimg:active {
        max-width: 75%;
    }

</style>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <h1 class="text-center">bgChange <img class="inline h-[1em] w-auto" alt="logo" src="/img/bgchangeicon.png"></h1><hr><br>
        <p class="text-center">One of the first utilities I wrote in Python. I made it with a friend because our school didn't allow custom wallpapers.</p>
        <p class="text-center">And (as people do), we bypassed those limitations using some neat tricks.</p>
        <br><img class="notimg" title="Hold to make the image larger!" src="https://raw.githubusercontent.com/j4y-boi/bgChange/refs/heads/main/screenshot.png" alt="screenshot of bgchange"/><br>
        <hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="https://github.com/j4y-boi/bgChange">
                <button class="relative overflow-hidden rounded bg-blue-500 px-5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">GitHub Repo</button>
            </a>
            <a href="javascript:history.back()">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>