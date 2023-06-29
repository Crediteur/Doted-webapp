<script>
  export let set;
  if (!set.image) {
    set.image = '';
  }
</script>

<!-- same as cardSet.svelte component -->
<a href="/explore/{set.route}">
  <div
    class="flex flex-col items-center justify-center rounded-2xl bg-lime-300 text-center hover:bg-emerald-200"
  >
    <img
      src={set.image}
      class="h-[20em] w-[20em] rounded-2xl object-cover object-[50%10%]"
      alt="Set of cards for {set.title}"
      loading="lazy"
    />
  </div>
  <div class="px-1 py-2">
    <p>{set.title}</p>
    <p class=" text-sm">
      {#if set.cardCount === 1}
        {set.cardCount} card
      {:else}
        {set.cardCount} cards
      {/if}
    </p>
  </div>
</a>
