<!-- card with a fading image slideshow -->
<script>
  import { onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let mon;

  //array of images
  const spritesList = [
    mon.sprites.front_default,
    mon.sprites.front_shiny,
    mon.sprites.other.dream_world.front_default,
    mon.sprites.other.home.front_default,
    mon.sprites.other['official-artwork'].front_default
  ];

  let i = 0;
  function next() {
    i = (i + 1) % spritesList.length;
    //check for invalid image paths
    if (!spritesList[i]) {
      console.log('invalid image path: spritesList[' + i + ']');
      next();
    }
  }

  let timer;
  //time delay between image transitions
  onMount(() => {
    let timer = setInterval(next, 2000);
  });
  onDestroy(() => {
    clearInterval(timer);
  });

  //image source reactively changes by listening on i
  $: src = spritesList[i];
</script>

<div
  class="backface-hidden delay-120 mx-auto flex h-[600px] max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md transition ease-in-out hover:bg-emerald-100 sm:h-[800px] sm:px-12"
>
  <p class="text-md text-neutral-800 sm:text-lg">Pokemon</p>
  <!-- absolute positioned, prevents new image doms stacking on each other -->
  {#key src}
    <img
      transition:fade={{ delay: 200, duration: 2000, easing: quintOut }}
      class="absolute w-[400px]"
      {src}
      alt={mon.name}
    />
  {/key}
  <!-- padding to replace absolute positioned image -->
  <div class="h-[400px]" />
  <div>
    <h1 class="my-8 mt-0 mb-8 text-center text-4xl capitalize sm:text-6xl">{mon.name}</h1>
    <p class="text-center text-xs text-neutral-600">Lorem ipsum dolor sit amet</p>
  </div>
</div>
