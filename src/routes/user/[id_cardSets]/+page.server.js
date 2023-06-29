import { error } from '@sveltejs/kit';
import { Set } from '$lib/models/Set.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  //check for valid param
  if (isNaN(params.id_cardSets)) {
    handleError();
  }

  const setId = params.id_cardSets;

  //parse set and cards object
  let set = await Set.query().findById(setId);
  //check for valid set
  if (!set.cardSetId) {
    handleError();
  }
  set = { ...set };

  const cards = (await Set.relatedQuery('cards').for(setId).orderBy('cardId')).map((card) => ({
    setId: set.cardSetId,
    ...card
  }));

  //return set and cards object
  return { set: set, cards: cards };
}

function handleError() {
  throw error(404, 'Page Not Found');
}
