<script>
    import Gridthing from "$lib/gridthing.svelte";
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";

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
        <Typewriter text="Projects"/>
        <div class="flex justify-center p-8">
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="javascript:window.location.href = window.location.pathname + '?featured';">View only featured projects</a>
            </button>
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="javascript:window.location.href = window.location.pathname;">View all projects</a>
            </button>
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="/">Return home</a>
            </button>
        </div>
        <br>
        <Gridthing/>
    </div>

    <Bottomfooter/>
</div>    