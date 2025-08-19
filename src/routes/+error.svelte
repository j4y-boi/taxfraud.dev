<script>
    import TyperwriterText from "$lib/TyperwriterText.svelte";
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter speedmin={350} speedmax={350} text="404"/>
        <TyperwriterText speedmin={30} speedmax={30} text="We couldn't find that page!"/><br>
        <div class="flex justify-center p-8 center">
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <a href="/">Return home </a>
            </button>
        </div>
    </div>

    <Bottomfooter/>
</div>    