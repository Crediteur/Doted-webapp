<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const messages = {
    401: { emoji: '👮‍♀️', message: 'Unauthorized' },
    404: { emoji: '🫠', message: 'Not Found' },
    418: { emoji: '🍵', message: "I'm a teapot" },
    500: { emoji: '💥', message: 'Internal Error' },
    502: { emoji: '🌐', message: 'Bad Gateway' }
  };
</script>

<!-- error page redirect -->
<svelte:head>
  <title>{$page.status} Error</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-32">
  <h1 class="text-center text-6xl">
    <span class="font-bold">{$page.status}</span>
    {messages[$page.status].message ?? $page.error.message}
  </h1>
  <span class="py-8 text-[10rem]">
    {messages[$page.status].emoji ?? messages[500].emoji}
  </span>
  <button
    on:click={() => goto(`/user`)}
    class="custom-shadow mt-4 rounded-lg bg-perrywinkle p-3 px-4 text-center align-middle text-lg hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
    >Back to Homepage</button
  >
</div>

<style>
  .custom-shadow {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
  .custom-shadow:active {
    box-shadow: inset 2px 2px 0.8px rgba(0, 0, 0, 0.6);
  }
</style>
