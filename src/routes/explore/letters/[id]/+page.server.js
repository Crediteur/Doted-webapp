import { Card } from '$lib/models/Card.js';

/**
 * @returns a letter object using params
 */
export const load = async ({ params }) => {
  const paramId = params.id; //string
  const cards = await Card.query().where('text', 'like', 'Letter%');
  const firstId = cards[0].cardId;

  const letter = {
    id: paramId,
    name: `Letter ${String.fromCharCode(Number(paramId) + 97 - 1).toUpperCase()}`,
    image: `/dyn/images/card/${Number(paramId) + firstId - 1}.png`,
    desc: '',
    setTitle: 'Letters'
  };
  return { letter };
};
