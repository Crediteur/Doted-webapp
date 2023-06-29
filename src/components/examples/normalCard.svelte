<script>
  export let card;
</script>

<div
  class="mx-auto flex h-[600px] max-w-2xl flex-col items-center justify-around rounded-md bg-lime-200 px-2 py-12 drop-shadow-md hover:bg-emerald-100 sm:h-[800px] md:px-12"
>
  <p class="text-md text-neutral-800 sm:text-lg">{card.setTitle ?? ''}</p>
  <img class="max-h-[600px] w-auto object-cover p-4 sm:p-8" src={card.image} alt={card.name} />
  <div>
    <h1 class="my-8 mt-0 mb-8 text-center text-4xl capitalize sm:text-6xl">{card.name}</h1>
    <p class="text-center text-xs text-neutral-600">{card.desc ?? 'Lorem ipsum dolor sit amet'}</p>
  </div>
</div>
