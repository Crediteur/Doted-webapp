import { Card } from '$lib/models/Card.js';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  const card = await Card.query().where('text', 'Letter A');
  const pika = await Card.query().where('text', 'Pikachu');

  //manually load data
  const sets = [
    {
      image: `/dyn/images/card/${pika[0].image}`,
      cardCount: 151,
      title: 'Pokemon',
      route: 'pokemon'
    },
    {
      image: `/dyn/images/card/${card[0].image}`,
      cardCount: 26,
      title: 'Letters',
      route: 'letters'
    },
    {
      image: '/dyn/images/cardset/cool-cat.gif',
      cardCount: 8,
      title: 'Cat GiFs',
      route: 'cats'
    }
  ];
  return { sets: sets };
};
