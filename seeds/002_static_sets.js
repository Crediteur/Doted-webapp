/**
 * Add static card sets from YAML (seeds/static_cards/cardsets.yml)
 */
import yaml from 'js-yaml';
import shell from 'shelljs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const DYN_ROOT = 'static/dyn';
const DYN_IMG_ROOT = `${DYN_ROOT}/images`;
const SEED_CARD_IMG_ROOT = 'seeds/static_cards/images';

export async function seed(knex) {
  const cardsetPromises = [];
  yaml.loadAll(await readFile('seeds/static_cards/cardsets.yaml'), (cardSets) => {
    Array.prototype.push.apply(
      cardsetPromises,
      cardSets.map((cardSet) =>
        seedCardset(knex, cardSet).then((dbCardSet) =>
          seedCards(knex, dbCardSet.cardSetId, cardSet.image, cardSet.cards)
        )
      )
    );
  });
  console.log(`Seeding ${cardsetPromises.length} cardsets.`);
  for (const cardsetPromise of cardsetPromises) {
    await cardsetPromise;
  }
  console.log('done.');
}

/**
 * Insert a cardset.
 */
async function seedCardset(knex, cardSet) {
  let dbCardSet = (({ title, description, imageType, image, cardCount }) => ({
    title,
    description,
    imageType,
    image,
    cardCount
  }))(cardSet); // strip unwanted props
  const inserts = await knex('CardSet').insert(dbCardSet, 'cardSetId');
  if (inserts.length !== 1) throw 'Expected one successful insert';
  dbCardSet.cardSetId = inserts[0].cardSetId;
  dbCardSet = await updateAndPlaceCardSetImage(knex, dbCardSet);
  console.log(`Cardset ${cardSet.title} added with id ${dbCardSet.cardSetId}.`);
  return dbCardSet;
}

/**
 * Insert cards, and assign them to specified cardset (by id).
 */
async function seedCards(knex, cardSetId, cardSetImage, cards) {
  // bulk insert all cards
  const inserts = await knex('Card').insert(cards, ['cardId', 'image']);
  await updateAndPlaceCardImages(knex, cardSetImage, inserts);
  const cardSetCardsData = inserts.map((insert) => ({ cardSetId, cardId: insert.cardId }));
  await knex('CardSetCards').insert(cardSetCardsData); // assign freshly inserted cards to cardset
  console.log(`${inserts.length} cards added to cardset with id ${cardSetId}.`);
}

async function updateAndPlaceCardImages(knex, cardSetImage, inserts) {
  const cardTargetDir = `${DYN_IMG_ROOT}/card`;
  const sourceDir = `${SEED_CARD_IMG_ROOT}/${path.dirname(cardSetImage)}/card`;
  shell.mkdir(cardTargetDir);

  for (const insert of inserts) {
    const sourceFile = `${sourceDir}/${insert.image}`;
    const ext = getSupportedImageExtension(insert.image);
    if (!shell.test('-e', sourceFile)) throw `Source file not found: ${sourceFile}`;
    const targetFile = `${insert.cardId}${ext}`;
    const target = `${cardTargetDir}/${targetFile}`;
    if (shell.test('-e', target)) throw `Target card image already exists: ${target}`;
    shell.cp(sourceFile, target);
    await knex('Card').where({ cardId: insert.cardId }).update({ image: targetFile });
  }
}

async function updateAndPlaceCardSetImage(knex, dbCardSet) {
  const cardsetTargetDir = `${DYN_IMG_ROOT}/cardset`;
  shell.mkdir('-p', cardsetTargetDir);
  const source = `${SEED_CARD_IMG_ROOT}/${dbCardSet.image}`;
  const ext = getSupportedImageExtension(dbCardSet.image);
  const targetBase = `${cardsetTargetDir}/${dbCardSet.cardSetId}`;
  if (shell.test('-e', `${targetBase}.*`)) throw `Target file: ${targetBase}.* exists. Aborting.`;
  shell.cp(source, `${targetBase}${ext}`);
  const finalDbCardSet = { ...dbCardSet, image: `${dbCardSet.cardSetId}${ext}` };
  await knex('CardSet')
    .where({ cardSetId: dbCardSet.cardSetId })
    .update({ image: finalDbCardSet.image });
  return finalDbCardSet;
}

function getSupportedImageExtension(fn) {
  const ext = path.extname(fn);
  if (!/\.(png|jpg|webm)$/.exec(ext)) throw `Unsupported file extension for cardset image: ${fn}`;
  return ext;
}
