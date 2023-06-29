import { Set } from '$lib/models/Set.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
  //convert url query into boolean
  const load = url.searchParams.get('load') === 'true';
  const setId = params.id_cardSets;
  let set = {};

  //only load cardSet data if 'load' is true
  if (load) {
    set = await Set.query().findById(setId);
    set = { ...set };
  }
  return { load: load, set: set };
}
