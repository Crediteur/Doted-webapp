<script>
  import SetCard from '../../components/examples/setCard.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  let sets = data.sets;
</script>

<!-- /explore page contains some preview ideas -->
<svelte:head>
  <title>doted | Explore</title>
</svelte:head>

<h1 class="mt-8 pt-8 text-center text-4xl">Explore</h1>
<p class="mb-4 py-2 text-center">Browse Curated Card Sets</p>

<!-- example static sets -->
<div class="mx-auto max-w-6xl overflow-hidden p-8 font-['Nunito']">
  <div class="custom-col grid place-items-center gap-10 gap-y-4 lg:gap-y-8">
    {#each sets as set}
      <SetCard {set} />
    {/each}
  </div>
</div>

<style>
  .custom-col {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
</style>
