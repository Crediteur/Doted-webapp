<script lang="ts">
  import { goto } from '$app/navigation';
  import { createEventDispatcher } from 'svelte';
  import { login, register } from '../hooks/auth';
  import { store } from '../hooks/auth';

  export let action = 'signIn';
  export let isOpen = false;

  let email = '';
  let password = '';
  let rememberMe = false;
  let error = '';

  const dispatch = createEventDispatcher();
  function close() {
    dispatch('close', {});
  }

  function switchAction() {
    action = action === 'signIn' ? 'signUp' : 'signIn';
  }

  async function signIn() {
    const response = await login(email, password);

    if (response.success) {
      console.log(response.data);
      $store = response.data;
      close();
      goto('/user');
    } else {
      error = response.message;
      console.log(response);
    }
  }

  async function signUp() {
    const response = await register(email, password);

    if (response.success) {
      console.log(response.data);
      $store = response.data;
      close();
      goto('/user');
    } else {
      error = response.message;
      console.log(response);
    }
  }
</script>

{#if isOpen}
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
        Background backdrop, show/hide based on modal state.

        Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
        Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:justify-end">
              <div class="-mr-2">
                <button
                  on:click={close}
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
            <div class=" min-w-full sm:flex sm:items-start sm:justify-center">
              <div class="mt-3 min-w-full text-center sm:mt-0 sm:text-left">
                <div
                  class="flex min-h-full min-w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                >
                  <div class="w-full max-w-md space-y-8">
                    <div>
                      <img class="mx-auto h-12 w-auto" src="/doted-logo2.png" alt="Doted" />
                      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        {action === 'signIn' ? 'Sign in to your account' : 'Create an account'}
                      </h2>
                    </div>
                    <form class="mt-8 space-y-6">
                      <input type="hidden" name="remember" value="true" />
                      <div class="-space-y-px rounded-md shadow-sm">
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                          bind:value={email}
                          id="email-address"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required
                          class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Email address"
                        />
                      </div>
                      <div class="-space-y-px rounded-md shadow-sm">
                        <label for="password" class="sr-only">Password</label>
                        <input
                          bind:value={password}
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required
                          class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Password"
                        />
                      </div>

                      <div class="flex items-center justify-between">
                        {#if action === 'signIn'}
                          <div class="flex items-center">
                            <input
                              bind:value={rememberMe}
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                              >Remember me</label
                            >
                          </div>
                        {/if}
                      </div>

                      <div class="relative">
                        {#if error}
                          <span class="absolute top-full w-full text-right text-base text-red-500"
                            >{error}</span
                          >
                        {/if}
                        <div class="flex flex-row justify-between gap-8">
                          <button
                            on:click={signUp}
                            class="group relative flex w-full max-w-[8rem] justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Register
                          </button>
                          <button
                            on:click={signIn}
                            class="group relative flex w-full max-w-[8rem] justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="flex items-center justify-end">
                      <div class="text-sm">
                        {action === 'signIn' ? "Don't have an account?" : 'Already an account.'}
                      </div>
                      <button
                        on:click={switchAction}
                        class="ml-1.5 font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {action === 'signIn' ? 'Sign Up' : 'Login'}</button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
