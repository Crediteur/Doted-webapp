<!-- overview of pokemon queried from pokeapi -->
<script>
  import MiniCard from '../../../components/examples/miniCard.svelte';

  export let data;
  let searchText = '';
  let filteredPokemon = [];

  $: {
    if (searchText) {
      filteredPokemon = data.loadedPokemon.filter((mon) =>
        mon.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      filteredPokemon = [...data.loadedPokemon];
    }
  }
</script>

<!-- html -->
<svelte:head>
  <title>Explore | Pokemon</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-8 font-['Nunito']">
  <h1 class="my-8 text-center text-4xl">Pokemon Cards</h1>
  <!-- <Nav /> -->
  <input
    class="h-14 w-full rounded-md border-2 border-gray-200 p-4 text-lg"
    bind:value={searchText}
    placeholder="Search Pokemon"
  />

  <div class="custom-grid-col grid gap-4 py-4">
    {#each filteredPokemon as card}
      <a href="/explore/pokemon/{card.id}">
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
