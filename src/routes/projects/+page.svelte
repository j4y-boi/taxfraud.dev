<script>
    import Gridthing from "$lib/gridthing.svelte";
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter text="Projects"/>
        <div class="flex justify-center p-8">
            <a href="javascript:window.location.href = window.location.pathname + '?featured';">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">View only featured projects</button>
            </a>
            <a href="javascript:window.location.href = window.location.pathname;">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">View all projects</button>
            </a>
            <a href="/">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return home</button>
            </a>
        </div>
        <br>
        <Gridthing/>
    </div>

    <Bottomfooter/>
</div>    