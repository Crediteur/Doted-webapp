// api endpoints for modifying sets
import { json } from '@sveltejs/kit';
import { Set } from '$lib/models/Set.js';
import { User } from '$lib/models/User.js';
// TODO: missing user relation

// add new set to db
export const POST = async ({ request }) => {
  // setId is in request header but only used in PATCH
  console.log('/api/sets: new POST request called');
  const data = await request.json();
  const { image, title, desc } = data;

  //insert data into db
  const newSet = await Set.query().insert({
    image: image,
    title: title,
    description: desc,
    imageType: 'image/png'
  });

  //return error
  if (!newSet) {
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
      setId: newSet.cardSetId,
      message: `new set id=${newSet.cardSetId} added to database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

//update existing set in db
export const PATCH = async ({ request }) => {
  console.log('/api/sets: new PATCH request called');
  const data = await request.json();
  const { image, title, desc, setId } = data;

  //update data in db
  const updSet = await Set.query().findById(setId).patch({
    image: image,
    title: title,
    description: desc
  });

  //return error
  if (!updSet) {
    return json({
      status: 500,
      body: {
        setId: setId,
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
      message: `successfully updated set id=${setId} from database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

// delete set if not shared from static user
//remove specific set relation with user
export const DELETE = async ({ request }) => {
  const data = await request.json();

  const setId = data.id_cardSets;
  console.log('/api/sets: new DELETE on set ' + setId);

  //if (shared) remove CardSetCards relation to user
  //else
  const delRel = await Set.relatedQuery('cards').for(setId).deleteById(setId);
  const delSet = await Set.query().deleteById(setId);

  //return error
  if (!delRel || !delSet) {
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
      message: `successfully deleted set id=${setId} from database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};

//get sets from userId, params: userId
//unused, User relation not written, only for documentation completion
export const GET = async ({ request }) => {
  const data = await request.json();
  const userId = data.userId;
  console.log('/api/set: new GET sets called');

  const sets = (await User.relatedQuery('sets').for(userId).orderBy('setId')).map((set) => ({
    ...set
  }));

  //return error
  if (typeof sets === 'undefined') {
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
      sets: sets,
      message: `successfully got sets of user userId=${userId} from database`
    },
    headers: {
      'content-type': 'application/json'
    }
  });
};
