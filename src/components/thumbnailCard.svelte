<script>
  export let thumbnail;
</script>

<a href="/user/{thumbnail.setId}/{thumbnail.cardId}">
  <div
    class="custom-shadow flex flex-col items-center justify-center rounded-lg bg-panTostado py-8 text-center hover:bg-supernova"
  >
    <img
      src={thumbnail.image.includes('https://') || thumbnail.image.includes('http://')
        ? thumbnail.image
        : `/dyn/images/card/${thumbnail.image}`}
      class="h-40 w-auto object-cover p-4"
      alt="Card for {thumbnail.text}"
      loading="lazy"
    />
    <div class="py-2">
      <p class="text-center text-lg capitalize tracking-wide">{thumbnail.text}</p>
    </div>
  </div>
</a>

<style>
  .custom-shadow {
    box-shadow: 3px 3px 0.8px rgba(0, 0, 0, 0.7);
  }
</style>
