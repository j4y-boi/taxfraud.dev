<!--largely copied from the other file-->
<script>
  import { onMount } from 'svelte';
  let {text="Default Text", speedmin = 50, speedmax = 150 } = $props();
  let displayed = $state(text[0]);
  let additonal = 0;
  let resetPause = 250;
  let reset = false

  // holy shit what did vs code quick fix come up with???
  // it works, so I'm not complaining
  /**
	 * @param {number} low
	 * @param {number} high
	 */
  function rannum(low, high) { // god i really hope this is how it works
    low = Math.ceil(low);
    high = Math.floor(high);
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  onMount(() => {
    let index = 1;

    function typeNextChar() {
      if (index >= text.length) return;
      if (additonal !== 0) additonal-=1;

      let char = text[index];
      if (char === "ë") {
        reset = true
        additonal += 2;
      } else {
        if (reset) {
          displayed="";
          reset = false;
        } else if (char === ".") {
          additonal += 1;
        }
        displayed += char;
      }

      index++;
      const delay = rannum(speedmin+(additonal * resetPause),speedmax+(additonal*resetPause));
      setTimeout(typeNextChar, delay);
    }

    typeNextChar();
  });
</script>

<p style="text-align:center">{displayed}</p>