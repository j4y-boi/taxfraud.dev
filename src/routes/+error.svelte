<script>
    import TyperwriterText from "$lib/TyperwriterText.svelte";
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter speedmin={400} speedmax={400} text="404"/>
        <TyperwriterText speedmin={30} speedmax={30} text="We couldn't find that page!"/>
    </div>

    <Bottomfooter/>
</div>    