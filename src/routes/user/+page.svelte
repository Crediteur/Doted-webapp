<script>
  import { goto } from '$app/navigation';
  import Set from '../../components/cardSet.svelte';
  import Toolbar from '../../components/toolbar.svelte';

  export let data;
  const sets = data.sets;

  const addButton = () => {
    goto(`/user/1/edit-set?load=false`);
  };
</script>

<!-- homepage overview, displays all decks the user has -->
<svelte:head>
  <title>User Homepage</title>
</svelte:head>

<!-- breadcrumbs -->
<div class="flex flex-row px-0 pb-6 font-['Nunito']">
  <p class="rounded-sm border-b-4 border-b-madagascarPink">Home</p>
</div>

<!-- check if user has sets -->
{#if sets.length}
  <div class="custom-col grid place-items-center gap-10 gap-y-4 lg:gap-y-8">
    {#each sets as set}
      <Set {set} />
    {/each}
  </div>
{:else}
  <p class="p-8 text-center">You have no sets. Create a new one!</p>
{/if}

<!-- toolbar -->
<Toolbar>
  <button
    slot="b3"
    on:click={addButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> new_window </span>
    <span
      class="custom-shadow-s absolute left-1/2 top-0 z-50 m-4 mx-auto -translate-x-1/4 -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Add Set</span
    >
  </button>
</Toolbar>

<style>
  .custom-col {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
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
