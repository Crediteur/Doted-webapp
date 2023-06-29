/**
 * Add static card sets from YAML (seeds/static_cards/cardsets.yml)
 */
import shell from 'shelljs';

const DYN_ROOT = 'static/dyn';
const DYN_IMG_ROOT = `${DYN_ROOT}/images`;
const SEED_CARD_IMG_ROOT = 'seeds/static_cards/images';

export async function seed(knex) {
  const cardSetSubdir = 'lolcats';
  const sourceDir = `${SEED_CARD_IMG_ROOT}/${cardSetSubdir}/card`;
  const cardTargetDir = `${DYN_IMG_ROOT}/card`;
  shell.mkdir(cardTargetDir);

  for (const image of [
    'cat-cute-cat.gif',
    'cat-cute.gif',
    'cat-sleepy.gif',
    'cat.gif',
    'cats-love.gif',
    'funny-christine.gif',
    'grimace-cat-grimace.gif',
    'meme-cat.gif'
  ]) {
    const sourceFile = `${sourceDir}/${image}`;
    if (!shell.test('-e', sourceFile)) throw `Source file not found: ${sourceFile}`;
    const target = `${cardTargetDir}/${image}`;
    if (shell.test('-e', target)) throw `Target card image already exists: ${target}`;
    shell.cp(sourceFile, target);
  }

  const cover = 'cool-cat.gif';
  const cardsetTargetDir = `${DYN_IMG_ROOT}/cardset`;
  shell.mkdir('-p', cardsetTargetDir);
  const source = `${SEED_CARD_IMG_ROOT}/${cardSetSubdir}/${cover}`;
  shell.cp(source, `${cardsetTargetDir}/${cover}`);
}
