import { Set } from '$lib/models/Set.js';
import { Card } from '$lib/models/Card.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
  //convert url query into boolean
  const load = url.searchParams.get('load') === 'true';
  const setId = params.id_cardSets;
  const cardId = params.id_card;

  let set = await Set.query().findById(setId);
  set = { ...set };
  let card = {};
  //only load cardSet data if 'load' is true
  if (load) {
    card = await Card.query().findById(cardId);
    card = { ...card };
  }
  return { load: load, set: set, card: card };
}
