import { lolcats } from '../cats';

/**
 * @returns a letter object using params
 */
export function load({ params }) {
  const id = params.id; //string
  const cat = lolcats[id - 1];
  return { cat };
}
