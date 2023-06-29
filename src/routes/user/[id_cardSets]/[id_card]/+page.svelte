<script>
  import { goto } from '$app/navigation';
  import Toolbar from '../../../../components/toolbar.svelte';
  import MainCard from '../../../../components/mainCard.svelte';
  import Modal from '../../.././../components/modal.svelte';

  export let data;
  let card = data.card[0];
  const set = data.set;
  const setId = set.cardSetId;
  const cards = checkDeletion(data.cards);

  //track card Id and index reference disparity
  const firstCardId = data.cards[0].cardId;

  //update a current card to be displayed as main element
  const cardCount = cards.length;
  let selectedCardIndex = card.cardId - firstCardId;

  let showModal = false;

  //checks for deleted item gaps between id of each card and inserts undefined
  function checkDeletion(cards) {
    const minId = cards[0].cardId;
    const maxId = cards[cards.length - 1].cardId;

    if (maxId - minId + 1 - cards.length > 0) {
      let deletedCount = maxId - minId + 1 - cards.length;
      //console.log(`There are ${deletedCount} deleted cards`);

      for (let i = 1; i < cards.length - 1; i++) {
        if (cards[i].cardId - cards[i - 1].cardId != 1) {
          let difference = cards[i].cardId - cards[i - 1].cardId - 1;
          for (let j = 0; j < difference; j++) {
            cards.splice(i, 0, undefined);
            deletedCount--;
            //console.log(`undefined inserted into index ${i}`);
          }
          if (deletedCount < 0) break;
          i += difference;
        }
      }
    }
    return cards;
  }

  //back & forward handlers, changes reference of current card
  const leftButton = () => {
    if (cardCount < 2) return;
    if (selectedCardIndex === 0) {
      selectedCardIndex = cardCount - 1;
    } else {
      selectedCardIndex -= 1;
    }
    card = cards[selectedCardIndex];
    if (!card) leftButton();
    goto(`/user/${setId}/${card.cardId}`);
  };
  const rightButton = () => {
    if (cardCount < 2) return;
    if (selectedCardIndex === cardCount - 1) {
      selectedCardIndex = 0;
    } else {
      selectedCardIndex += 1;
    }
    card = cards[selectedCardIndex];
    if (!card) rightButton();
    goto(`/user/${setId}/${card.cardId}`);
  };

  //toolbar button handler functions
  const deleteButton = async () => {
    showModal = true;
  };

  const editButton = () => {
    goto(`/user/${setId}/${card.cardId}/edit-card?load=true`);
  };

  const addButton = () => {
    goto(`/user/${setId}/${card.cardId}/edit-card?load=false`);
  };

  const deleteCard = async () => {
    await fetch(`../../../api/cards`, {
      method: 'DELETE',
      body: JSON.stringify({
        id_cardSets: setId,
        id_card: card.cardId
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    goto(`/user/${setId}`);
  };

  //handle keyboard presses
  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        leftButton();
        break;

      case 'ArrowRight':
        rightButton();
        break;

      case ' ':
        rightButton();
        break;
    }
  };
</script>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

<!-- single card view -->
<svelte:head>
  <title>{card.text}</title>
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
  <p class="rounded-sm border-b-4 border-b-madagascarPink">{card.text}</p>
</div>

<div class="flex justify-center pb-4">
  <MainCard {card} />
</div>

<Toolbar>
  <!-- scroll buttons -->
  <button
    slot="bLeft"
    on:click={leftButton}
    class="custom-shadow group flex rounded-lg bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> arrow_back_ios_new </span>
  </button>

  <button
    slot="bRight"
    on:click={rightButton}
    class="custom-shadow group flex rounded-lg bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> arrow_forward_ios </span>
  </button>

  <!-- api buttons -->
  <button
    slot="b1"
    on:click={deleteButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> delete </span>
    <span
      class="custom-shadow-s absolute left-1 top-0 z-50 m-4 mx-auto -translate-x-[1.45rem] -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Delete Card</span
    >
  </button>

  <button
    slot="b2"
    on:click={editButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> edit </span>
    <span
      class="custom-shadow-s absolute left-1/2 top-0 z-50 m-4 mx-auto -translate-x-1/2 -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Edit Card</span
    >
  </button>

  <button
    slot="b3"
    on:click={addButton}
    class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
  >
    <span class="local-material-symbols-outlined"> add </span>
    <span
      class="custom-shadow-s absolute left-1/2 top-0 z-50 m-4 mx-auto translate-x-[1.66rem] -translate-y-16 whitespace-nowrap
    rounded-md bg-gray-800 px-2 py-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 group-active:hidden"
      >Add Card</span
    >
  </button>
</Toolbar>

<Modal bind:showModal buttonAction={deleteCard}>
  <h2 slot="header">Delete Card</h2>
  <p slot="body" class="py-4">Are you sure you want to delete the {card.text} card?</p>
</Modal>

<style>
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
