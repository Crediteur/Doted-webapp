import shell from 'shelljs';

export const AVATAR_PATH = 'dyn/images/avatar';
/**
 * Seed generic must haves, e.g. defualt administrator user.
 */
export async function seed(knex) {
  const adminPassword = randomPassword();
  const avatarSourcePath = `seeds/avatars`;
  const avatarTargetPath = `static/${AVATAR_PATH}`;
  const adminAvatarImage = 'avatar_1678271375232.png';

  // prepare image
  shell.mkdir('-p', avatarTargetPath);
  shell.cp(`${avatarSourcePath}/${adminAvatarImage}`, avatarTargetPath);

  // add user record
  await knex('User').insert({
    foreignUserId: 'admin',
    email: 'admin@example.com',
    displayName: 'Administrator',
    password: adminPassword,
    avatar: adminAvatarImage
  });

  console.log(`Administrator user created, login: admin@example.com / ${adminPassword}`);
}

/**
 * Simple way of generating a random password without external dependencies.
 */
const randomPassword = () => Math.random().toString(36).substring(2, 12);
