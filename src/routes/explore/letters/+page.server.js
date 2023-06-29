import { Card } from '$lib/models/Card.js';

/**
 * @returns an object containing an array of letter objects
 */
export const load = async () => {
  const cards = await Card.query().where('text', 'like', 'Letter%');
  const firstId = cards[0].cardId;

  const letters = [];
  for (let i = 0; i < cards.length; i++) {
    const id = cards[i].cardId - firstId;
    let letter = {
      id: id + 1,
      name: `Letter ${String.fromCharCode(id + 97)}`,
      image: `/dyn/images/card/${firstId + id}.png`,
      desc: '',
      setTitle: 'Letters'
    };
    letters.push(letter);
  }
  return { letters };
};
