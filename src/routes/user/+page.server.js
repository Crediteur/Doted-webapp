import { Set } from '$lib/models/Set.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const sets = (await Set.query().orderBy('cardSetId')).map((set) => ({ ...set }));
  return { sets };
}
