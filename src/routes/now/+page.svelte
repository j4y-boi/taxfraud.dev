<script>
    import Typewriter from "$lib/Typewriter.svelte";
    import Bottomfooter from "$lib/bottomfooter.svelte";
    import SingleGrid from "$lib/singleGrid.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <div class="text-white center">
        <Typewriter text="What am I doing now?"/> <hr><br>
        <p class="text-center"><b>I'm currently learning:</b></p>
        <p class="text-center">- Java | CSS (more extensive) -</p><br>
        <p class="text-center"><b>Things I hope to start learning someday:</b></p>
        <p class="text-center">- C# | React | 6502 ASM -</p><br>
        <p class="text-center"><b>What I currently am working on:</b></p><br>
        <!-- SCREW YOU, THIS LOOKS GOOD, I DONT CARE THAT THERE ISNT A BACKEND TO CONNECT TO -->
        <SingleGrid projects={[
            {
                title: "Ijzerboer",
                description: "Collect scrap metal, collect money, collect more scrap metal, and so on",
                image: "/img/ijzerboer/ijzerboer.png",
                link: "/projects/ijzerboer"
            },
            {
                title: "Pip the Mouse 2",
                description: "Sequel of my mouse game",
                image: "/img/pip/pip2.png",
                link: "/projects/pip-the-mouse-2"
            }
        ]}></SingleGrid><br>
        <br><hr><br> <!-- This is probably breaking 30+ design rules, but I could give less of a crap at the moment -->
        <div style="display: flex; justify-content: center;" class="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a href="/">
                <button class="bg-white  text-black font-bold p-4 rounded transition active:scale-95 hover:scale-105" style="margin-right: 10px">Return home</button>
            </a>
        </div>
    </div>
    <Bottomfooter/>
</div>    