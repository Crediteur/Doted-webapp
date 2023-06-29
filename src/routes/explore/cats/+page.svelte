<!-- overview of pokemon queried from pokeapi -->
<script>
  import MiniCard from '../../../components/examples/miniCard.svelte';

  export let data;
  let cats = data.lolcats;
</script>

<!-- html -->
<svelte:head>
  <title>Explore | Cats</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-8 font-['Nunito']">
  <h1 class="my-8 text-center text-4xl">My Favourite Cats</h1>

  <div class="custom-grid-col grid gap-4 py-4">
    {#each cats as card}
      <a href="/explore/{card.route}/{card.id}">
        <MiniCard {card} />
      </a>
    {/each}
  </div>
</div>

<!-- css -->
<style>
  .custom-grid-col {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
</style>
