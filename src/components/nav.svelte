<script lang="ts">
  import { store } from '../hooks/auth';
  import { AVATAR_PATH } from '../lib/path';
  import LoginAndRegistration from './loginAndRegistration.svelte';

  let isOpenLoginAndRegistration;
  let loginAction;

  function showLoginAndRegistration(action) {
    loginAction = action;
    isOpenLoginAndRegistration = !isOpenLoginAndRegistration;
  }

  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }

  function logout() {
    store.set(null);
  }
</script>

<div class="relative bg-peachyBreezes font-['Nunito']">
  <div class="mx-auto max-w-[72rem] px-6 ">
    <div class="flex items-center justify-between py-3 px-2">
      <div class="flex md:flex-1 lg:w-0">
        <a href="/user">
          <span class="sr-only">Doted</span>
          <img class="h-8 w-auto sm:h-10" src="/doted-logo2.png" alt="Doted logo" />
        </a>
      </div>
      <div class="md:hidden">
        <button
          on:click={toggleMenu}
          type="button"
          class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <!-- large nav links -->
      <nav class="hidden space-x-10 font-bold md:flex">
        <a href="/about" class="text-2xl text-gray-500 hover:text-gray-900">About</a>

        <a href="/docs" class="text-2xl text-gray-500 hover:text-gray-900">Docs</a>

        <a href="/explore" class="text-2xl text-gray-500 hover:text-gray-900">Explore</a>
      </nav>
      <div class="relative hidden items-center justify-end font-bold md:flex md:flex-1 lg:w-0">
        {#if $store != null}
          <!-- user is logged in -->
          <div class="group relative inline-block cursor-pointer">
            <div class="items-center md:flex">
              <img
                class="h-10 w-10 rounded-full"
                src={`/${AVATAR_PATH}/${$store.avatar}`}
                alt="avatar"
              />
              <span class="ml-2">{$store.displayName}</span>
              <svg class="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <!-- Dropdown -->
            <div class="absolute hidden w-full bg-transparent pt-2 group-hover:block">
              <ul
                class="w-full rounded-md bg-madagascarPink  p-2 shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <li class="">
                  <a class="block rounded-md py-2 px-4 hover:bg-white" href="/user/profile"
                    >Profile</a
                  >
                </li>
                <li class="">
                  <a class="block rounded-md py-2 px-4 hover:bg-white" href="/" on:click={logout}
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </div>
        {:else}
          <!-- nav link button-->
          <button
            on:click={() => showLoginAndRegistration('signIn')}
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-perrywinkle px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-700"
          >
            Log in
          </button>
        {/if}
      </div>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  {#if showMenu}
    <!-- mobile drop down menu -->
    <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
      <div
        class="divide-y-2 divide-gray-50 rounded-lg  bg-madagascarPink shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/doted-logo2.png" alt="Doted logo" />
            </div>
            <div>
              <!-- close menu button -->
              <button
                on:click={toggleMenu}
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <!-- dropdown menu nav links -->
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a href="/about" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900">About</span>
              </a>

              <a href="/docs" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900">Docs</span>
              </a>

              <a href="/explore" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900">Explore</span>
              </a>
            </nav>
          </div>
        </div>
        <div class="space-y-6 py-6 px-8">
          <div class="flex flex-row justify-between">
            <a href="./" class="text-base font-medium text-gray-900 hover:text-gray-700">English</a>

            <a href="./" class="text-base font-medium text-gray-900 hover:text-gray-700">简体中文</a
            >
          </div>
          {#if $store != null}
            <div class="relative">
              <div class="flex items-center justify-between md:flex">
                <a class="flex cursor-pointer items-center md:flex" href="/user/profile">
                  <img
                    class="h-10 w-10 rounded-full"
                    src={`/${AVATAR_PATH}/${$store.avatar}`}
                    alt="avatar"
                  />
                  <span class="ml-2">{$store.displayName}</span>
                </a>
                <a
                  class="block translate-x-4 cursor-pointer rounded-md py-2 px-4 hover:bg-white"
                  href="/"
                  on:click={logout}>Logout</a
                >
              </div>
            </div>
          {:else}
            <!-- modal button group -->
            <div>
              <button
                on:click={() => showLoginAndRegistration('signUp')}
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-slate-600 hover:text-indigo-700"
                >Sign up</button
              >
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <button
                  on:click={() => showLoginAndRegistration('signIn')}
                  class="text-indigo-600 hover:text-indigo-500">Log in</button
                >
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<LoginAndRegistration
  isOpen={isOpenLoginAndRegistration}
  action={loginAction}
  on:close={() => showLoginAndRegistration('signIn')}
/>
