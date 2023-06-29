<!-- card that animates with a flip effect with clicked -->
<script>
  export let mon;
  export let showCardBack;

  let types = [mon.types[0].type.name];
  if (mon.types[1]) types.push(mon.types[1].type.name);
</script>

<!-- front side -->
<div
  class="backface-hidden delay-120 mx-auto flex h-[600px] max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md transition ease-in-out hover:bg-emerald-100 sm:h-[800px] sm:px-12"
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
  class="backface-hidden transform-back class:show-back={showCardBack} delay-120 mx-auto flex h-[600px] max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md transition ease-in-out hover:bg-emerald-100 sm:h-[800px] sm:px-12"
>
  <div>
    <p class="sm:text-md text-center text-sm text-neutral-800">Type</p>
    <p class="pt-4 text-center text-2xl sm:text-4xl">
      {types[0]}
      {#if types.length == 2}
        | {types[1]}
      {/if}
    </p>
  </div>

  <img class="w-[400px] -translate-y-8" src={mon.sprites.back_default} alt="{mon.name} back view" />
  <div class="-translate-y-8">
    <p class="sm:text-md text-center text-sm text-neutral-800">Starting Move</p>
    <p class="pt-4 text-center text-2xl sm:text-4xl">{mon.moves[0].move.name}</p>
  </div>
</div>

<style>
  /* absolute position centering */
  .backface-hidden {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .transform-back {
    transform: rotateY(180deg);
  }

  /* not sure if needed */
  .show-back {
    animation: revealTextSlowly 0.3s forwards;
  }
  @keyframes revealTextSlowly {
    to {
      color: black;
    }
  }
</style>
