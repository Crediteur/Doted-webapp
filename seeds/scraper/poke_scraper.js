import yaml from 'js-yaml';
import { stdout, stderr } from 'node:process';
import { createWriteStream } from 'node:fs';
import { EOL } from 'node:os';
import axios from 'axios';
import shell from 'shelljs';

const TARGET_PATH = 'seeds/static_cards';
const CARDSET_PATH = 'poke';
const IMG_TARGET_PATH = `${TARGET_PATH}/images/${CARDSET_PATH}`;
const DECK_IMAGE_ID = 25; // pokemon id to be used as the deck image

/**
 * Fetches cards from pake api along with their images; then oututs a yaml file that can be used as seed.
 */
async function seed() {
  const cardCount = 50;
  if (shell.test('-e', IMG_TARGET_PATH)) throw `Target path exists ${IMG_TARGET_PATH}`;
  shell.mkdir('-p', `${IMG_TARGET_PATH}/card`);
  const cards = await loadPokemons(cardCount);
  const deckImage = await loadPokemon(`https://pokeapi.co/api/v2/pokemon/${DECK_IMAGE_ID}/`).then(
    (poke) => downloadImage(poke.image, IMG_TARGET_PATH)
  );
  const cardSet = [
    {
      title: 'Pokemon',
      description: 'The first generation of Pokemon',
      imageType: deckImage.imageType,
      image: `${CARDSET_PATH}/${deckImage.image}`,
      cardCount: cardCount,
      cards
    }
  ];

  stdout.write(`---${EOL}`);
  stdout.write(yaml.dump(cardSet));
}

/**
 * @param int num, default=50
 * @desc fetches data from PokeAPI for use of populating the seed file
 * @returns an array containing pokemon objects
 */
const loadPokemons = async (num = 50) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`).then((r) => r.json());
  const cards = [];

  for (const result of data.results) {
    cards.push(await loadPokemon(result.url));
  }

  return await fetchImages(cards, IMG_TARGET_PATH);
};

const loadPokemon = async (url) => {
  const poke = await fetch(url).then((r) => r.json());
  const desc = parseTypes(poke.types);
  logErr(`Loaded details for ${poke.name} ${desc}`);
  return {
    text: capitalizeFirstLetter(poke.name),
    image: poke['sprites']['front_default'],
    desc: desc
  };
};

//concatenate types as single string for card description
const parseTypes = (types) => {
  if (types.length === 2) return types[0].type.name + ' ' + types[1].type.name;
  return types[0].type.name;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function fetchImages(cards, subDir) {
  const downloadedCards = [];
  const cardsSubDir = `${subDir}/card`;
  for (const card of cards) {
    const image = await downloadImage(card.image, cardsSubDir);
    downloadedCards.push({ ...card, ...image });
  }
  return downloadedCards;
}

const URL_FN_EXPR = /\/([^/]+)$/;
const getFilename = (url) => URL_FN_EXPR.exec(url)[1];

const downloadImage = async (url, path) => {
  const filename = getFilename(url);

  // using axios here, as fetch seems to be broken, or I just ran out of patience
  await axios({ url, responseType: 'stream' })
    .then((res) => {
      const dest = createWriteStream(`${path}/${filename}`);
      res.data.pipe(dest);
    })
    .catch((err) => logErr(`Error downloading ${url}: ${err}`));

  logErr(`Downloaded: ${url} → ${path}/${filename}`);
  return { image: filename, imageType: 'image/png' };
};

seed().catch((e) => {
  logErr(e);
});

function logErr(msg) {
  stderr.write(msg);
  stderr.write(EOL);
}
