<script>
  import NormalCard from '../../../../components/examples/normalCard.svelte';

  export let data; // pokemon json parsed in +page.js
  let card = data.letter;
</script>

<svelte:head>
  <title>{card.name} Page</title>
</svelte:head>

<div class="mx-auto max-w-6xl p-8">
  <div>
    <NormalCard {card} />
  </div>
</div>
