import { error } from '@sveltejs/kit';
import { Set } from '$lib/models/Set.js';
import { Card } from '$lib/models/Card.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  //check for valid param
  if (isNaN(params.id_cardSets) || isNaN(params.id_card)) {
    handleError();
  }

  //query both set and card via params
  const setId = params.id_cardSets;
  const cardId = params.id_card;

  //parse set and card object
  let set = await Set.query().findById(setId);
  //check for valid set
  if (!set.cardSetId) {
    handleError();
  }
  set = { ...set };
  const card = [await Card.query().findById(cardId)].map((card) => ({
    setId: set.cardSetId,
    setTitle: set.title,
    ...card
  }));
  const cards = (await Set.relatedQuery('cards').for(setId).orderBy('cardId')).map((card) => ({
    setId: set.cardSetId,
    setTitle: set.title,
    ...card
  }));

  //return set and card object
  return { set: set, card: card, cards: cards };
}

function handleError() {
  throw error(404, 'Page Not Found');
}
