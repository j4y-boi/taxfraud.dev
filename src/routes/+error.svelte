<script>
    import TyperwriterText from "$lib/TyperwriterText.svelte";
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";
    import { page } from '$app/state';
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        {#if page.status === 404}
            <Typewriter speedmin={350} speedmax={350} text="404"/>
            <TyperwriterText speedmin={30} speedmax={30} text="We couldn't find that page!"/><br>
        {:else if page.status === 500}
            <Typewriter speedmin={350} speedmax={350} text="500"/>
            <TyperwriterText speedmin={30} speedmax={30} text="Something went wrong on our end..."/><br>
        {:else if page.status === 403}
            <Typewriter speedmin={350} speedmax={350} text="403"/>
            <TyperwriterText speedmin={30} speedmax={30} text="Whoops, you can't go there bud."/><br>
        {:else}
            <Typewriter speedmin={350} speedmax={350} text="Uhh..."/>
            <TyperwriterText speedmin={30} speedmax={30} text="I'm not sure what happened..."/><br>
        {/if}
        <div class="flex justify-center p-8 center">
            <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">
                <a href="/">Return home </a>
            </button>
        </div>
    </div>

    <Bottomfooter/>
</div>    