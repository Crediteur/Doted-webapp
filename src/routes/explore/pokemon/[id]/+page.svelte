<!-- page displaying different card animations -->
<script>
  import FlipCard from '../../../../components/examples/flipCard.svelte';
  import FlipBook from '../../../../components/examples/flipBook.svelte';
  import CarouselCard from '../../../../components/examples/carouselCard.svelte';

  export let data; // pokemon json parsed in +page.js
  const mon = data.pokemon;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let showCardBack = false;
  const toggleShowBack = () => (showCardBack = !showCardBack);

  //key toggle
  function onKeyDown(key) {
    if (key.keyCode == 32) {
      toggleShowBack();
    }
  }
</script>

<svelte:head>
  <title>{capitalize(mon.name)} Page</title>
</svelte:head>
<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="mx-auto max-w-6xl p-8">
  <div class="py-8" />
  <!-- big-card component -->
  <p>1. Flip card</p>
  <div class="click-card" on:click={toggleShowBack} on:keydown={onKeyDown}>
    <div class="flip-box">
      <div class="flip-box-inner" class:flip-it={showCardBack}>
        <FlipCard {mon} {showCardBack} />
      </div>
    </div>
  </div>

  <!-- divider for demonstration purposes only -->
  <div class="py-[350px] sm:py-[450px]" />

  <p>2. Book style</p>
  <div class="click-card" on:click={toggleShowBack} on:keydown={onKeyDown}>
    <div class="flip-box">
      <div class="flip-box-inner" class:flip-it={showCardBack}>
        <FlipBook {mon} {showCardBack} />
      </div>
    </div>
  </div>

  <!-- divider for demonstration purposes only -->
  <div class="py-[350px] sm:py-[500px]" />

  <div>
    <p>3. Carousel images</p>
    <CarouselCard {mon} />
  </div>
</div>

<style>
  .flip-box {
    background-color: transparent;
    perspective: 2500px; /* change parallax effect*/
  }

  .flip-box-inner {
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip on button click */
  .flip-it {
    transform: rotateY(180deg);
  }

  .click-card {
    cursor: pointer;
  }
</style>
