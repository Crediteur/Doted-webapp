import { json } from '@sveltejs/kit';
import { User } from '../../../lib/models/User';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  const body = await event.request.json();

  const user: any = await User.query().where('email', body.email).first();

  const valid = user && (await user.password) === body.password;

  return json({
    success: valid,
    message: valid ? 'OK' : 'User not found or password is incorrect',
    data: valid ? user : null
  });
}
