import { json } from '@sveltejs/kit';
import { User } from '../../../../lib/models/User';
import type { RequestHandler } from '@sveltejs/kit';

export const PATCH = (async (event) => {
  const body = await event.request.json();
  // create new user
  try {
    const newUser = await User.query()
      .patch({ ...body.user })
      .where('userId', '=', body.userId);

    return json({
      success: true,
      message: 'OK',
      data: newUser
    });
  } catch (error) {
    return json({
      success: false,
      message: error.message || 'Something went wrong',
      data: null
    });
  }
}) satisfies RequestHandler;
