<!-- small cards for grid display in deck overview  -->
<script>
  export let card;
</script>

<div
  class="flex h-64 flex-col items-center justify-center rounded-md bg-lime-200 shadow-md hover:bg-emerald-100"
>
  <img
    src={card.image}
    class="h-40 w-auto object-cover p-4"
    alt="sprite image of {card.name}"
    loading="lazy"
  />
  <p class="text-center text-lg font-semibold capitalize tracking-wide">
    {card.name}
  </p>
</div>
