<script>
  export let set;
  if (!set.image) {
    set.image = '';
  }
</script>

<!-- card set block -->
<a href="/user/{set.cardSetId}">
  <!-- display block -->
  <div
    class="group relative flex flex-col items-center justify-center rounded-2xl bg-panTostado text-center hover:bg-supernova"
  >
    <img
      src={set.image.includes('https://') || set.image.includes('http://')
        ? set.image
        : `/dyn/images/cardset/${set.image}`}
      class="h-[20em] w-[20em] rounded-2xl object-cover object-[50%10%]"
      alt="Set of cards for {set.title}"
      loading="lazy"
    />

    <!-- fanned stack of cards - top right -->
    <div
      class="absolute -z-10 items-center justify-center overflow-hidden rounded-2xl bg-madagascarPink transition-transform group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-3"
    >
      <img
        src={set.image.includes('https://') || set.image.includes('http://')
          ? set.image
          : `/dyn/images/cardset/${set.image}`}
        class="h-[20em] w-[20em] rounded-2xl object-cover object-[50%10%] blur-lg brightness-75"
        alt="Fan effect for {set.title} card set"
        loading="lazy"
      />
    </div>
    <!-- fanned - top left -->
    <div
      class="absolute -z-10 origin-top-right items-center justify-center overflow-hidden rounded-2xl bg-glacierGreen transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1.5 group-hover:rotate-2"
    >
      <img
        src={set.image.includes('https://') || set.image.includes('http://')
          ? set.image
          : `/dyn/images/cardset/${set.image}`}
        class="h-[20em] w-[20em] rounded-2xl object-cover object-[50%10%] blur-lg brightness-75"
        alt="Fan effect for {set.title} card set"
        loading="lazy"
      />
    </div>
  </div>

  <!-- subtext -->
  <div class="px-1 py-2">
    <p>{set.title}</p>
    <p class="text-sm">
      {#if set.cardCount === 1}
        {set.cardCount} card
      {:else}
        {set.cardCount} cards
      {/if}
    </p>
  </div>
</a>
