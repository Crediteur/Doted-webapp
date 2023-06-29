<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let data;
  const load = data.load;
  const title = load ? 'Edit' : 'Add';
  let set = data.set;

  const button1 = 'formCancel';
  const button2 = 'formSubmit';

  if (!set.image) {
    set.image = '';
  }
  // set src to dyn folder, otherwise default image
  let dynPath =
    set.image.includes('https://') || set.image.includes('http://')
      ? set.image
      : `/dyn/images/cardset/${set.image}`;
  let src = load ? dynPath : '';

  //returns last string after splitting char '/'
  const splitString = (str) => {
    let arr = str.split('/');
    return arr[arr.length - 1];
  };

  //function to handle multiple form buttons
  const handleFormSubmit = (event) => {
    if (event.submitter.id === button1) {
      console.log(`cancel button clicked: ${event.submitter.id}`);
      cancelButton();
    } else {
      fetchAPI();
    }
  };

  const fetchAPI = async () => {
    const res = await fetch(`../../../api/sets`, {
      method: load ? 'PATCH' : 'POST',
      body: JSON.stringify({
        image: src.includes('/dyn/') ? splitString(src) : src,
        title: set.title,
        desc: set.description,
        setId: set.cardSetId
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    const response = await res.json();
    console.log(response);
    goto('/user');
  };

  const cancelButton = () => {
    if (!load) {
      goto('/user');
    } else {
      goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
    }
  };
</script>

<!-- edit sets view, doubles as the add or edit page by checking 'load' flag -->
<svelte:head>
  <title>
    {title} Set
  </title>
</svelte:head>

<!-- breadcrumbs -->
<div class="flex flex-row px-0 pb-6">
  <a href="/user">
    <p>Home</p>
  </a>
  <p>&nbsp;>&nbsp;</p>
  {#if load}
    <a href="/user/{set.cardSetId}">
      <p>{set.title}</p>
    </a>
    <p>&nbsp;>&nbsp;</p>
    <p class="rounded-sm border-b-4 border-b-madagascarPink">Edit Set</p>
  {:else}
    <p class="rounded-sm border-b-4 border-b-madagascarPink">Add Set</p>
  {/if}
</div>

<!-- main set form -->
<div class="flex justify-center ">
  <form
    on:submit|preventDefault={handleFormSubmit}
    class="custom-shadow-s flex w-[38em] max-w-2xl flex-col gap-4 rounded-lg bg-panTostado p-8"
  >
    <!-- image url -->
    <div>
      <label for="image">Image URL</label>
      <input
        type="text"
        id="image"
        name="setImage"
        bind:value={src}
        class="block h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-base text-slate-800"
      />
    </div>

    <!-- image preview -->
    <div>
      <label for="view">Preview</label>
      <image />
      <div class="flex justify-center border-2 border-dotted">
        <img
          class="min-h-[16rem] w-auto object-contain p-2 sm:p-4"
          {src}
          alt="Set Image {set.title ?? ''}"
        />
      </div>
    </div>

    <!-- title -->
    <div>
      <label for="title">Set Title</label>
      <input
        type="text"
        id="title"
        name="setTitle"
        bind:value={set.title}
        class="block h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-base text-slate-800"
      />
    </div>

    <!-- description -->
    <div>
      <label for="desc">Description</label>
      <input
        type="text"
        id="description"
        name="setDesc"
        bind:value={set.description}
        class="block h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-base text-slate-800"
      />
    </div>

    <!-- button group -->
    <div class="flex flex-row-reverse justify-between gap-4 pt-4 pb-2">
      <button
        id={button2}
        class="custom-shadow w-28 rounded-lg bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
      >
        {load ? 'Update' : 'Add'}
      </button>
      <button
        id={button1}
        class="custom-shadow w-28 rounded-lg bg-gray-300 p-3 hover:bg-slate-200 active:translate-y-0.5 active:translate-x-0.5 active:bg-slate-500"
        >Cancel</button
      >
    </div>
  </form>
</div>

<style>
  .custom-shadow {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
  .custom-shadow:active {
    box-shadow: inset 2px 2px 0.8px rgba(0, 0, 0, 0.6);
  }
  .custom-shadow-s {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
</style>
