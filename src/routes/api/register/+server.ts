import { json } from '@sveltejs/kit';
import { User } from '../../../lib/models/User';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  const body = await event.request.json();

  const user: any = await User.query().where('email', body.email).first();

  // if user exists, return notice
  if (user) {
    return json({
      success: false,
      message: 'User already exists',
      data: null
    });
  }

  // create new user
  const newUser = await User.query().insert({
    foreignUserId: body.email.split('@')[0],
    email: body.email,
    password: body.password,
    displayName: body.email.split('@')[0]
    //icon: 'https://i.pravatar.cc/128'
  });

  return json({
    success: true,
    message: 'OK',
    data: newUser
  });
}
