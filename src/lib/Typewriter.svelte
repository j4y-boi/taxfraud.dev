<!--i dunno how this STUPID language works, so im splitting things, i dont care if its inefficient, hell, i barely even know what libraries i chose to import during setup-->
<script>
  import { onMount } from 'svelte';
  let {text="Default text",speedmin = 50, speedmax = 100} = $props();
  let displayed = $state(text[0]);


  // holy shit what did vs code quick fix come up with???
  // it works, so I'm not complaining
  /**
	 * @param {number} low
	 * @param {number} high
	 */
  function rannum(low,high){ // god i really hope this is how it works
      low = Math.ceil(low);
      high = Math.floor(high);
      return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  onMount(() => {
    let index = 1;
    const interval = setInterval(() => {
      displayed += text[index];
      index++;
      if (index === text.length) clearInterval(interval);
    }, rannum(speedmin,speedmax));
  });
</script>

<h1 style="text-align:center">{displayed}</h1>