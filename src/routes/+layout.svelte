<!-- landing page -->
<script>
  import { navigating } from '$app/stores';
  import { loading } from '$lib/loading';
  $: $loading = !!$navigating;

  //only show spinner after certain amount of load time
  const loadBuffer = async () => {
    return await new Promise((res) => setTimeout(res, 400));
  };

  import Loader from '../components/loader.svelte';
  import '../app.css';
</script>

<slot />

<!-- fixed loading spinner -->
{#if $loading}
  {#await loadBuffer() then}
    <div class="pointer-events-none fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <Loader size={120} />
    </div>
  {/await}
{/if}
