<!-- overview of pokemon queried from pokeapi -->
<script>
  import MiniCard from '../../../components/examples/miniCard.svelte';

  export let data;
  let letters = data.letters;
</script>

<!-- html -->
<svelte:head>
  <title>Explore | Letters</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-8 font-['Nunito']">
  <h1 class="my-8 text-center text-4xl">Letters of the Alphabet</h1>

  <div class="custom-grid-col grid gap-4 py-4">
    {#each letters as card}
      <a href="/explore/letters/{card.id}">
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
