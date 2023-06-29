<script>
  import { goto } from '$app/navigation';
  import Thumbnail from '../../../components/thumbnailCard.svelte';
  import Toolbar from '../../../components/toolbar.svelte';
  import Modal from '../../../components/modal.svelte';

  export let data;
  const cards = data.cards;
  const set = data.set;
  const setId = set.cardSetId;

  let searchText = '';
  let filteredCards = [];

  let showModal = false;

  //filter cards by search input
  $: {
    if (searchText) {
      filteredCards = cards.filter((card) =>
        card.text.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      filteredCards = [...cards];
    }
  }

  //toolbar button handler functions
  const deleteButton = () => {
    showModal = true;
  };

  const editButton = () => {
    goto(`/user/${setId}/edit-set?load=true`);
  };

  const addButton = () => {
    goto(`/user/${setId}/1/edit-card?load=false`);
  };

  const deleteSet = async () => {
    await fetch(`../../api/sets`, {
      method: 'DELETE',
      body: JSON.stringify({
        id_cardSets: setId
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    goto('/user');
  };
</script>

<!-- deck view displaying all cards in the deck, dynamic route -->
<svelte:head>
  <title>{set.title} Set</title>
</svelte:head>

<div class="flex flex-col justify-between sm:flex-row">
  <!-- breadcrumbs -->
  <div class="flex flex-row px-0 pb-6">
    <a href="/user">
      <p>Home</p>
    </a>
    <p>&nbsp;>&nbsp;</p>
    <p class="rounded-sm border-b-4 border-b-madagascarPink">{set.title}</p>
  </div>

  <!-- search bar -->
  <input
    class="mb-6 h-12 w-full rounded-lg border-2 border-gray-200 px-6 text-base text-slate-600 sm:m-0 sm:w-2/5 sm:-translate-y-3.5 sm:rounded-full"
    bind:value={searchText}
    placeholder="🔍 Search {set.title}"
  />
</div>

<!-- display thumbnail cards -->
{#if cards.length}
  <div class="custom-col grid gap-4">
    {#each filteredCards as thumbnail}
      <Thumbnail {thumbnail} />
    {/each}
  </div>
{:else}
  <p class="p-8 text-center">There are no cards in this set. Create a new one!</p>
{/if}

<!-- toolbar -->
<Toolbar>
  <button
    slot="b1"
    on:click={deleteButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> disabled_by_default </span>
    <span
      class="custom-shadow-s absolute left-1 top-0 z-50 m-4 mx-auto -translate-x-[1.15rem] -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Delete Set</span
    >
  </button>

  <button
    slot="b2"
    on:click={editButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> edit_square </span>
    <span
      class="custom-shadow-s absolute left-1/2 top-0 z-50 m-4 mx-auto -translate-x-1/2 -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Edit Set</span
    >
  </button>

  <button
    slot="b3"
    on:click={addButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> add </span>
    <span
      class="custom-shadow-s absolute left-1/2 top-0 z-50 m-4 mx-auto translate-x-[1.61rem] -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Add Card</span
    >
  </button>
</Toolbar>

<!-- modal popup to confirm delete action-->
<Modal bind:showModal buttonAction={deleteSet}>
  <h2 slot="header">Delete Set</h2>
  <p slot="body" class="py-4">Are you sure you want to delete the {set.title} set?</p>
</Modal>

<style>
  .custom-col {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  .custom-shadow {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
  .custom-shadow:active {
    box-shadow: inset 2px 2px 0.8px rgba(0, 0, 0, 0.6);
  }
  .custom-shadow-s {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.4);
  }
</style>
