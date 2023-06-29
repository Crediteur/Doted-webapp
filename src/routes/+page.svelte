<script lang="ts">
  import LoginAndRegistration from '../components/loginAndRegistration.svelte';

  let isOpenLoginAndRegistration = false;
  let loginAction;

  function showLoginAndRegistration(action) {
    loginAction = action;
    isOpenLoginAndRegistration = true;
  }
</script>

<!-- bg asymmetrical colour -->
<div class="absolute -z-10 flex min-h-full min-w-full flex-row">
  <div class="basis-[70%] bg-crystalsongBlue" />
  <div class="basis-[30%] bg-supernova" />
</div>

<!-- main grid wrapper -->
<main class="block h-[100dvh] w-auto p-4">
  <!-- custom grid: 8x8 -->
  <div class="custom-grid h-full w-full gap-4">
    <!-- logo -->
    <img class="w-40" src="/doted-logo2-coloured.png" alt="logo of Doted" />
    <!-- logo text -->
    <div class="row-span-2 row-start-2 flex flex-col pl-4 font-[Nunito]">
      <p class=" border-t-2 border-black pt-3">the</p>
      <p class="font-semibold">lovable</p>
      <p class="">flashcard</p>
      <p class="">application</p>
    </div>

    <!-- center large text -->
    <p
      class="col-start-3 row-start-3 hidden text-center font-[Consolas] text-7xl md:inline md:text-8xl md:text-[5rem]"
    >
      D
    </p>
    <p
      class="col-start-3 row-start-4 hidden text-center font-[Consolas] text-8xl md:inline md:text-[5rem]"
    >
      O
    </p>
    <p
      class="col-start-3 row-start-5 hidden text-center font-[Consolas] text-8xl md:inline md:text-[5rem]"
    >
      T
    </p>
    <p
      class="col-start-3 row-start-6 hidden text-center font-[Consolas] text-8xl md:inline md:text-[5rem]"
    >
      E
    </p>
    <p
      class="col-start-3 row-start-7 hidden text-center font-[Consolas] text-8xl md:inline md:text-[5rem]"
    >
      D
    </p>

    <p
      class="col-span-2 col-start-1 row-start-4 text-left font-[Consolas] text-7xl tracking-widest md:col-start-5 md:row-start-3 md:text-8xl md:text-[5rem]"
    >
      DESIGN
    </p>
    <p
      class="col-span-2 col-start-1 row-start-5 whitespace-nowrap text-left font-[Consolas] text-7xl tracking-widest md:col-start-5 md:row-start-4 md:text-8xl md:text-[5rem]"
    >
      & LEARN
    </p>
    <p
      class="col-start-0 row-start-7 text-left font-[Consolas] text-7xl tracking-widest md:col-start-5 md:text-8xl md:text-[5rem]"
    >
      2023
    </p>

    <!-- utility menu -->
    <div
      class="row-start-0 col-start-4 row-span-4 whitespace-nowrap text-right font-[Consolas] tracking-wide xs:col-start-6 sm:col-start-7"
    >
      <a href="/" on:click={showLoginAndRegistration}>
        <p class="custom-hover py-1 text-2xl sm:py-3.5 sm:text-4xl">LOG IN</p>
      </a>
      <a href="/about">
        <p class="custom-hover py-1 text-2xl sm:py-3.5 sm:text-4xl">ABOUT</p>
      </a>
      <a href="/explore">
        <p class="custom-hover py-1 text-2xl sm:py-3.5 sm:text-4xl">EXPLORE</p>
      </a>
      <a href="/docs">
        <p class="custom-hover py-1 text-2xl sm:py-3.5 sm:text-4xl">DOCS</p>
      </a>
    </div>
    <!-- try it button -->
    <div
      class="col-start-0 row-start-6 whitespace-nowrap text-right font-[Consolas] tracking-wide md:col-start-7 md:row-start-7 md:translate-y-4"
    >
      <a href="/user">
        <p class="custom-hover border-r-8 border-perrywinkle py-3.5 text-4xl">TRY IT →&nbsp;</p>
      </a>
    </div>

    <!-- card preview section -->
    <div
      class="col-span-4 col-start-4 row-span-2 row-start-6 flex w-full flex-row gap-4 overflow-hidden md:col-span-3 md:col-start-5 md:row-start-5 md:gap-8 lg:gap-10 2xl:gap-12"
    >
      <!-- pikachu card -->
      <div class=" inline-block h-min w-36 rounded-lg bg-slate-100 text-center sm:w-48 lg:w-60">
        <img src="/images/025.png" class="p-8 brightness-0" alt="faded silhouette of pikachu" />
        <p class="-translate-y-1 pb-8 font-semibold tracking-wide">Agile</p>
      </div>

      <!-- bulbasaur card -->
      <div class="hidden h-min w-48 flex-col rounded-lg bg-slate-100 text-center md:flex lg:w-60">
        <img src="/images/001.png" class="p-8 brightness-0" alt="faded silhouette of pikachu" />
        <p class="-translate-y-1 pb-8 font-semibold tracking-wide">Team T5G5</p>
      </div>

      <!-- pidgeotto card -->
      <div class="hidden h-min w-48 flex-col rounded-lg bg-slate-100 text-center lg:flex lg:w-60">
        <img src="/images/017.png" class="p-8 brightness-0" alt="faded silhouette of pikachu" />
        <p class="-translate-y-1 pb-8 font-semibold tracking-wide">Educate</p>
      </div>

      <!-- gyarados card -->
      <div class="hidden h-min w-48 flex-col rounded-lg bg-slate-100 text-center lg:w-60 xl:flex">
        <img src="/images/130.png" class="p-8 brightness-0" alt="faded silhouette of pikachu" />
        <p class="-translate-y-1 pb-8 font-semibold tracking-wide">Share</p>
      </div>
      <!-- ditto card -->
      <div class="hidden h-min w-48 flex-col rounded-lg bg-slate-100 text-center lg:w-60 2xl:flex">
        <img src="/images/132.png" class="p-8 brightness-0" alt="faded silhouette of pikachu" />
        <p class="-translate-y-1 pb-8 font-semibold tracking-wide">Please Give Feedback</p>
      </div>

      <!-- end -->
    </div>
  </div>
</main>

<LoginAndRegistration
  isOpen={isOpenLoginAndRegistration}
  action={loginAction}
  on:close={() => {
    isOpenLoginAndRegistration = false;
  }}
/>

<style>
  /* 8x8, side rows and columns are auto */
  .custom-grid {
    display: grid;
    grid-template-columns: auto 0.25fr 1fr 0.25fr 1fr 1fr 1fr auto;
    grid-template-rows: auto auto 1fr 1fr 1fr 1fr 1fr auto;
    grid-gap: 1rem;
  }

  /* hover animation for anchor links */
  .custom-hover {
    box-shadow: inset 0 0 0 0 #d1909e;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .custom-hover:hover {
    color: #fff;
    box-shadow: inset -300px 0 0 0 #998dd9;
  }
</style>
