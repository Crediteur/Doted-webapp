<script lang="ts">
  import { store } from '../../../hooks/auth';
  import Upload from '../../../components/upload.svelte';
  import { AVATAR_PATH } from '../../../lib/path';

  let displayNameInput = true;
  let displayNameValue = $store.displayName || '';

  let upload;
  let avatar;

  async function saveDisplayName() {
    let res = await fetch('/api/user/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: $store.userId,
        user: { displayName: displayNameValue }
      })
    });
    const result = await res.json();
    if (result.success) {
      $store.displayName = displayNameValue;
      displayNameInput = !displayNameInput;
    }
  }

  function saveAvatar(event) {
    $store.avatar = event.detail.url;
  }
</script>

<!-- homepage overview, displays all decks the user has -->
<svelte:head>
  <title>User Profile</title>
</svelte:head>
<div>
  <div class="md:grid md:grid-cols-4 md:gap-6">
    <div class="mt-5 md:col-span-2 md:col-start-2 md:mt-0">
      <div class="shadow sm:overflow-hidden sm:rounded-md">
        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 flex items-end justify-between ">
              <div class="w-full">
                <label for="display-name" class="block text-sm font-medium leading-6 text-gray-900"
                  >Display Name</label
                >
                <input
                  type="text"
                  name="display-name"
                  id="display-name"
                  bind:value={displayNameValue}
                  disabled={displayNameInput}
                  class="mt-2 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {#if displayNameInput}
                <button
                  type="button"
                  class="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                  on:click={() => (displayNameInput = !displayNameInput)}>Edit</button
                >
              {:else}
                <button
                  type="button"
                  class="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                  on:click={saveDisplayName}>Save</button
                >
              {/if}
            </div>
          </div>
          <div>
            <div class="block text-sm font-medium leading-6 text-gray-900">Avatar</div>
            <div class="mt-2 flex items-center">
              <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <img
                  src={`/${AVATAR_PATH}/${avatar ?? $store.avatar}`}
                  alt=""
                  class="h-full w-full object-cover text-gray-300"
                />
              </span>
              <button
                type="button"
                class="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                on:click={() => upload.open()}>Change</button
              >
              <Upload imagePrev={avatar} on:uploaded={saveAvatar} bind:this={upload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
