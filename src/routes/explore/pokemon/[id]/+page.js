/**
 * @returns a pokemon object using params
 */
export async function load({ params }) {
  const id = params.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  return { pokemon };
}
