<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let data;
  const load = data.load;
  const title = load ? 'Edit' : 'Add';
  let set = data.set;
  let card = data.card;
  const setId = set.cardSetId;

  const button1 = 'formCancel';
  const button2 = 'formSubmit';

  if (!card.image) {
    card.image = '';
  }
  // set src to dyn folder, otherwise default image
  let dynPath =
    card.image.includes('https://') || card.image.includes('http://')
      ? card.image
      : `/dyn/images/card/${card.image}`;
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

  async function fetchAPI() {
    const res = await fetch(`../../../../api/cards`, {
      method: load ? 'PATCH' : 'POST',
      body: JSON.stringify({
        image: src.includes('/dyn/') ? splitString(src) : src,
        text: card.text,
        desc: card.desc,
        cardId: card.cardId,
        setId: set.cardSetId
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    const response = await res.json();
    console.log(response);
    goto(`/user/${setId}/${response.body.cardId}`);
  }

  const cancelButton = () => {
    goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
  };
</script>

<!-- edit cards view, card info is shown as editable input boxes -->
<svelte:head>
  <title>
    {title} Card
  </title>
</svelte:head>

<!-- breadcrumbs -->
<div class="flex flex-row px-0 pb-6">
  <a href="/user">
    <p>Home</p>
  </a>
  <p>&nbsp;>&nbsp;</p>
  <a href="/user/{set.cardSetId}">
    <p>{set.title}</p>
  </a>
  <p>&nbsp;>&nbsp;</p>
  {#if load}
    <a href="/user/{set.cardSetId}/{card.cardId}">
      <p>{card.text}</p>
    </a>
    <p>&nbsp;>&nbsp;</p>
    <p class="rounded-sm border-b-4 border-b-madagascarPink">Edit Card</p>
  {:else}
    <p class="rounded-sm border-b-4 border-b-madagascarPink">Add Card</p>
  {/if}
</div>

<!-- TODO: add dropdown menu to select imageType or remove null requirement from column -->
<!-- adding more data columns requires appending the fetchAPI request and the endpoint -->
<!-- main card form -->
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
        name="cardImage"
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
          alt="Card Image {card.text ?? ''}"
        />
      </div>
    </div>

    <!-- title -->
    <div>
      <label for="text">Card Text</label>
      <input
        type="text"
        id="text"
        name="cardText"
        bind:value={card.text}
        class="block h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-base text-slate-800"
      />
    </div>

    <!-- description -->
    <div>
      <label for="desc">Description</label>
      <input
        type="text"
        id="description"
        name="cardDesc"
        bind:value={card.desc}
        class="block h-12 w-full rounded-lg border-2 border-gray-200 px-4 text-base text-slate-800"
      />
    </div>

    <!-- button group -->
    <div class=" flex flex-row-reverse justify-between gap-4 pt-4 pb-2">
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
