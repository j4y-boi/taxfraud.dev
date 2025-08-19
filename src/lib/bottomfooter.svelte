<script>
    const icons = ["❤️", "😭", "🥲", "🕑", "🥳"]

    /**
     * @param {string | any[]} list
     */
    function randomoption(list) {
        let i = Math.floor(Math.random() * list.length);
        return list[i];
    }
</script>

<footer class="text-center p-10 flex flex-col items-center bg-great-blue-900 text-white">
    <div>
        Made with <span>{randomoption(icons)}</span> 
        <span>by <a href="/info"><u>j4y_boi</u></a></span>
    </div>
    <p class="legal_disclaimer text-sm text-center">
        For legal reasons, all jokes made about tax fraud and other fraudulent acts related (but not limited to) taxes are satire. (lols)
    </p>
</footer>