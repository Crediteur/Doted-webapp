<script>
  export let showModal;
  export let buttonAction = () => dialog.close();
  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="max-w-lg rounded-md p-6"
>
  <div on:click|stopPropagation class="">
    <!-- modal content -->
    <slot name="header" />
    <hr />
    <slot name="body" />

    <!-- button group -->
    <div class="flex flex-row justify-between">
      <button
        on:click={() => dialog.close()}
        class="w-20 rounded-md bg-gray-300 p-3 py-2 px-4 hover:bg-slate-200">Cancel</button
      >
      <button on:click={buttonAction} class="w-20 rounded-md bg-perrywinkle hover:bg-violet-300"
        >Delete</button
      >
    </div>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
