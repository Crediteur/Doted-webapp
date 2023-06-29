<script>
  export let card;

  const parseCardType = (desc) => {
    let newArr = [];
    let splitStr = desc.split(' ');
    let tempStr = '';
    splitStr.forEach((type) => {
      let tempObj = addEmojiToType(type);
      if (tempObj.parse === false) {
        tempStr += tempObj.type + ' ';
      } else {
        newArr.push({ type: tempStr.trim(), parse: false });
        newArr.push(addEmojiToType(type));
        tempStr = '';
      }
    });
    newArr.push({ type: tempStr.trim(), parse: false });
    return newArr;
  };

  //little bit of fun
  const addEmojiToType = (type) => {
    type = type.toLowerCase();
    switch (type) {
      case 'normal':
        return { type: '📜 Normal', colour: 'bg-orange-200', parse: true };
      case 'fire':
        return { type: '🔥 Fire', colour: 'bg-red-400', parse: true };
      case 'water':
        return { type: '🌊 Water', colour: 'bg-blue-400', parse: true };
      case 'electric':
        return { type: '⚡ Electric', colour: 'bg-yellow-300', parse: true };
      case 'grass':
        return { type: '🍃 Grass', colour: 'bg-lime-500', parse: true };
      case 'ice':
        return { type: '🧊 Ice', colour: 'bg-cyan-200', parse: true };
      case 'fighting':
        return { type: '👊 Fighting', colour: 'bg-orange-500', parse: true };
      case 'poison':
        return { type: '🧪 Poison', colour: 'bg-violet-400', parse: true };
      case 'ground':
        return { type: '🧱 Ground', colour: 'bg-yellow-700', parse: true };
      case 'flying':
        return { type: '🦅 Flying', colour: 'bg-sky-200', parse: true };
      case 'psychic':
        return { type: '🔮 Psychic', colour: 'bg-fuchsia-400', parse: true };
      case 'bug':
        return { type: '🦗 Bug', colour: 'bg-green-400', parse: true };
      case 'rock':
        return { type: '🗻 Rock', colour: 'bg-zinc-400', parse: true };
      case 'ghost':
        return { type: '👻 Ghost', colour: 'bg-violet-100', parse: true };
      case 'dragon':
        return { type: '🐲 Dragon', colour: 'bg-indigo-400', parse: true };
      case 'dark':
        return { type: '🕶 Dark', colour: 'bg-gray-800', parse: true };
      case 'steel':
        return { type: '🔩 Steel', colour: 'bg-blue-100', parse: true };
      case 'fairy':
        return { type: '🦋 Fairy', colour: 'bg-pink-300', parse: true };
      default:
        return { type: type, parse: false };
    }
  };
</script>

<div
  class="custom-shadow flex max-w-2xl flex-col items-center justify-around break-normal rounded-lg bg-panTostado p-8 text-center sm:p-12 lg:p-14"
>
  <p>{card.setTitle}</p>

  <!-- card image -->
  <img
    class="h-[15rem] w-[15rem] object-contain p-2 sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem] lg:p-8"
    src={card.image.includes('https://') || card.image.includes('http://')
      ? card.image
      : `/dyn/images/card/${card.image}`}
    alt="Card for {card.text}"
  />
  <div class="">
    <!-- card text -->
    <p class="pb-6 text-center text-4xl capitalize tracking-wide sm:text-6xl">{card.text}</p>

    <!-- default description -->
    <div class="">
      {#if card.setTitle !== 'Pokemon'}
        <p class="text-center text-sm font-thin lg:text-lg">
          {card.desc}
        </p>
        <!-- pokemon description -->
      {:else}
        {#each parseCardType(card.desc) as { type, colour, parse }}
          {#if parse}
            <span
              class="{colour ? colour : 'bg-slate-100'}
              {type.toLowerCase().includes('dark') ? 'text-neutral-100' : 'text-black'}
              mx-1 inline-block rounded-lg px-2 py-1 text-center font-mono text-sm"
            >
              {type}
            </span>
          {:else}
            <p class="inline text-center text-sm font-thin lg:text-lg">
              {type}
            </p>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .custom-shadow {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
</style>
