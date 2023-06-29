import { json } from '@sveltejs/kit';
import { writeFile } from 'node:fs/promises';
import type { RequestHandler } from '@sveltejs/kit';
import { AVATAR_PATH } from '../../../lib/path';
import { User } from '../../../lib/models/User';

export const POST = (async (event) => {
  const body = await event.request.json();
  try {
    const fileName = `avatar_${Date.now()}.${stripType(body.type)}`;
    await writeFile(`static/${AVATAR_PATH}/${fileName}`, body.image, 'base64');
    console.log(body);
    await User.query().patch({ avatar: fileName }).where('userId', '=', body.userId); // TODO enhance security

    return json({
      success: true,
      message: 'OK',
      data: fileName
    });
  } catch (error) {
    return json({
      success: false,
      message: error.message || 'Something went wrong',
      data: null
    });
  }
}) satisfies RequestHandler;

const IMG_TYPE_EXPR = /image\/(gif|jpeg|png|webp)/;

/** Strips image type from mime type submitted. Throws if it's it not an allowed format. */
function stripType(type) {
  // data:image/jpeg;base64
  const m = IMG_TYPE_EXPR.exec(type);
  if (!m) {
    throw `Unknown umage type: ${type}.`;
  }
  return m[1];
}
