<script>
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <h1 class="text-center">Legally Distinct Animal Crossing</h1><hr><br>
        <p class="text-center">LDAC is the first game I ever wrote with Godot! It's was quite the learning experience, but do forgive me for all the bugs.</p>
        <p class="text-center">Because I don't want to retype my entire spiel, you can view all info on the itch.io page below!</p><br>
        <div style="display: flex; justify-content: center;">
            <iframe title="game" frameborder="0" src="https://itch.io/embed/3815431?border_width=5&amp;dark=true" width="560" height="175"><a href="https://j4y-boi.itch.io/ld-animal-crossing">Legally Distinct Animal Crossing by J4y_boi</a></iframe>
        </div><br><hr><br>
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button class="relative overflow-hidden rounded bg-blue-500 px-5 py-2.5 text-white font-bold p-4 transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 active:scale-95" style="margin-right: 10px">
                <a href="https://github.com/j4y-boi/legally-destinct-animal-crossing/tree/after-roulette">GitHub Repo</a>
            </button>
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="javascript:history.back()">Return</a>
            </button>
        </div>
    </div>
    <Bottomfooter/>
</div>    