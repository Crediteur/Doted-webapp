<!-- similar to flip card, except rotates like a book page -->
<script>
  export let mon;
  export let showCardBack;
</script>

<!-- front side -->
<div
  class="backface-hidden delay-120 mx-auto flex h-[600px] w-auto max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md transition ease-in-out hover:bg-emerald-100 sm:h-[800px] sm:w-1/2 sm:px-12"
>
  <p class="text-md text-neutral-800 sm:text-lg">Pokemon</p>
  <img class="w-[400px]" src={mon.sprites.front_default} alt={mon.name} />
  <div>
    <h1 class="my-8 mt-0 mb-8 text-center text-4xl capitalize sm:text-6xl">{mon.name}</h1>
    <p class="text-center text-xs text-neutral-600">Lorem ipsum dolor sit amet</p>
  </div>
</div>

<!-- back side -->
<div
  class="backface-hidden transform-back class:show-back={showCardBack} delay-120 mx-auto flex h-[600px] w-auto max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md transition ease-in-out hover:bg-emerald-100 sm:h-[800px] sm:w-1/2 sm:px-12"
>
  <p class="text-md text-neutral-800 sm:text-lg">Generation 1</p>
  <img class="w-[400px]" src={mon.sprites.back_default} alt="{mon.name} back view" />
  <div>
    <h1 class="my-8 mt-0 mb-8 text-center text-4xl capitalize sm:text-6xl">Moves</h1>
    <p class="text-center text-xs text-neutral-600">Hyperbeam</p>
  </div>
</div>

<style>
  /* responsive width is controlled with tailwind */
  .backface-hidden {
    position: absolute;
    /* width: 50%; */
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .transform-back {
    transform: rotateY(180deg);
  }
  .show-back {
    animation: revealTextSlowly 0.3s forwards;
  }

  @keyframes revealTextSlowly {
    to {
      color: black;
    }
  }
</style>
