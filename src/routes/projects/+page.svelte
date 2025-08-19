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
        <Gridthing/>
    </div>

    <Bottomfooter/>
</div>    