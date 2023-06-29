// api endpoints for modifying cards
import { json } from '@sveltejs/kit';
import { Set } from '$lib/models/Set.js';
import { Card } from '$lib/models/Card.js';
import { CardSetCards } from '$lib/models/CardSetCards.js';

// api endpoints for modifying cards
// add new card to db
export const POST = async ({ request }) => {
  // cardId & setId is in request header but cardId only used in PATCH
  console.log('/api/cards: new POST request called');
  const data = await request.json();
  const { image, text, desc, cardId, setId } = data;

  //insert data into db
  const newCard = await Card.query().insert({
    image: image,
    imageType: 'image/png',
    text: text,
    desc: desc
  });

  //increment cardCount
  if (newCard) {
    await Set.query().increment('cardCount', 1).where('cardSetId', setId);

    //insert relation in CardSetCard
    await CardSetCards.query().insert({
      cardSetId: setId,
      cardId: newCard.cardId
    });
  }

  //return error
  if (!newCard) {
    return json({
      status: 500,
      body: {
        message: `database response error, path from cardId=${cardId}`
      },
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  //return response
  return json({
    status: 200,
    body: {
      cardId: newCard.cardId,
      message: `new card id=${newCard.cardId} added to database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

//update existing card in db
export const PATCH = async ({ request }) => {
  const data = await request.json();
  const { image, text, desc, cardId } = data;
  console.log(`/api/cards: new PATCH request called on cardId=${cardId}`);

  //update data in db
  const updCard = await Card.query().findById(cardId).patch({
    image: image,
    text: text,
    desc: desc
  });

  //return error
  if (!updCard) {
    return json({
      status: 500,
      body: {
        message: `database response error`
      },
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  //return response
  return json({
    status: 200,
    body: {
      cardId: cardId,
      message: `successfully updated card id=${cardId} from database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

// delete card if not shared from shared static set
//remove specific card relation with user
export const DELETE = async ({ request }) => {
  const data = await request.json();
  const setId = data.id_cardSets;
  const cardId = data.id_card;
  console.log(`/api/cards: new DELETE on cardId=${cardId}`);

  // remove cardProgress? donDelete(CASCADE) function works?
  //if (shared) remove CardSetCards relation to user
  //else
  const delCard = await Card.query().deleteById(cardId);

  //decrement countcard if delete was successful
  if (delCard) {
    await Set.query().decrement('cardCount', 1).where('cardSetId', setId);
  }

  //return error
  if (!delCard) {
    return json({
      status: 500,
      body: {
        message: `database response error`
      },
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  //return response
  return json({
    status: 200,
    body: {
      message: `successfully deleted card id=${cardId} from setId=${setId}`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

//get an array of cards from setId, params: setId
//unused, for documentation completion
export const GET = async ({ request }) => {
  const data = await request.json();
  const setId = data.setId;
  console.log('/api/cards: new GET cards called');

  const cards = (await Set.relatedQuery('cards').for(setId).orderBy('cardId')).map((card) => ({
    ...card
  }));

  //return error
  if (typeof cards === 'undefined') {
    return json({
      status: 500,
      body: {
        message: `database response error`
      },
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  //return response
  return json({
    status: 200,
    body: {
      cards: cards,
      message: `successfully got cards of set setId=${setId} from database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};
