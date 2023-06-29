<script>
  import Nav from '../../components/nav.svelte';

  const section1 = 'User Guide';
  const section2 = 'Development';
  const section3 = 'Using our API';
  const section4 = 'Contributing';
</script>

<svelte:head>
  <title>doted | Docs</title>
</svelte:head>

<Nav />

<div class="mx-auto max-w-6xl p-8 font-['Nunito']">
  <h1 class="my-16 text-left text-6xl">Documentation</h1>

  <!-- table of contents -->
  <section class="max-w-xl py-8">
    <h2 class="text-4xl">Glossary</h2>

    <ol class="px-1 py-4">
      <li>
        <a href="#{section1}"
          ><span class="text-blue-600 hover:text-blue-400 hover:underline">{section1}</span></a
        >
      </li>
      <li>
        <a href="#{section2}"
          ><span class="text-blue-600 hover:text-blue-400 hover:underline">{section2}</span></a
        >
      </li>
      <li>
        <a href="#{section3}"
          ><span class="text-blue-600 hover:text-blue-400 hover:underline">{section3}</span></a
        >
      </li>
      <li>
        <a href="#{section4}"
          ><span class="text-blue-600 hover:text-blue-400 hover:underline">{section4}</span></a
        >
      </li>
    </ol>
  </section>

  <!-- general app usage guide -->
  <section class="mt-16 border-t-2 pb-16">
    <h2 id={section1} class="py-4 text-4xl">{section1}</h2>
    <br />

    <p>Create a user profile to save your custom cards.</p>
    <br />

    <p>
      The Toolbar contains functional buttons to help you achieve what you want to create. The
      buttons are different depending on the current active page.
    </p>

    <!-- toolbar set buttons -->
    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Modifying Sets</h3>
    <br />

    <div class="flex flex-row whitespace-nowrap">
      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Delete <span class="hidden sm:inline">Set</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> disabled_by_default </span>
        </button>
      </div>

      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Edit <span class="hidden sm:inline">Set</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> edit_square </span>
        </button>
      </div>

      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Create <span class="hidden sm:inline">Set</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> new_window </span>
        </button>
      </div>
    </div>
    <br />

    <!-- toolbar card buttons -->
    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Modifying Cards</h3>
    <br />

    <div class="flex flex-row whitespace-nowrap">
      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Delete <span class="hidden sm:inline">Card</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> delete </span>
        </button>
      </div>

      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Edit <span class="hidden sm:inline">Card</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> edit </span>
        </button>
      </div>

      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Create <span class="hidden sm:inline">Card</span></p>
        <button
          class="custom-shadow group flex rounded-full bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> add </span>
        </button>
      </div>
    </div>
    <br />
    <br />
    <br />

    <!-- forward/backward buttons -->
    <div class="flex flex-row whitespace-nowrap">
      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Next <span class="hidden sm:inline">Card</span></p>
        <button
          class="custom-shadow group flex rounded-lg bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> arrow_back_ios_new </span>
        </button>
      </div>

      <div class="flex w-24 flex-col items-center sm:w-36">
        <p class="py-1">Previous <span class="hidden sm:inline">Card</span></p>
        <button
          class="custom-shadow group flex rounded-lg bg-perrywinkle p-3 hover:bg-violet-300 active:translate-y-0.5 active:translate-x-0.5 active:bg-violet-500"
        >
          <span class="local-material-symbols-outlined"> arrow_forward_ios </span>
        </button>
      </div>
    </div>
    <br />
  </section>

  <!-- creating a development environment -->
  <section class="mt-16 border-t-2 pb-16">
    <h2 id={section2} class="py-4 text-4xl">{section2}</h2>
    <br />
    <p>
      To set up a working verison of the Doted project, download releases from our <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://github.com/t5g5/mono">Github</a
      >. Then clone locally to your prefered IDE.
    </p>
    <br />
    <p>
      Local development will also require a compatible version of <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://nodejs.org/en/">Node</a
      >.
    </p>

    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">pnpm</h3>
    <p>
      Although optional, it is recommended to use install <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://pnpm.io/">pnpm</a
      > as package manager.
    </p>
    <br />
    <p>Using npm</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>npm install -g pnpm</span></code>
    </pre>
    <br />
    <p>Using Homebrew</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>brew install pnpm</span></code>
    </pre>
    <br />
    <p>
      Then, install dependencies on your local project of Doted. The <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://github.com/t5g5/mono/blob/develop/package.json">package.json</a
      > file outlines the required dependencies.
    </p>
    <br />
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>pnpm install</span></code>
    </pre>

    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Database</h3>
    <p>
      The Doted database is a <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://www.sqlite.org/index.html">sqlite3</a
      >
      .db file built using
      <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://vincit.github.io/objection.js/">Objection.js</a
      >
      as an ORM and
      <a class="text-blue-600 hover:text-blue-400 hover:underline" href="https://knexjs.org/"
        >Knex.js</a
      > as a query builder.
    </p>
    <br />
    <p>Build the database with migrations</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>npx knex migrate:latest</span></code>
    </pre>
    <br />
    <p>Load the database with data</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>npx knex seed:run</span></code>
    </pre>
    <br />
    <p>
      Alternatively, if dependencies have already been installed, we have provided a condensed
      script to quickly build the database.
    </p>
    <br />
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code><span>pnpm run rebuild-db</span></code>
    </pre>

    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Build</h3>
    <br />
    <p>
      An advantage of using Sveltekit is that it comes bundled with great tools to run and deploy
      apps.
    </p>
    <br />
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span
          ><span class="text-neutral-400">// start the server and open the app in a local port</span
          >
        pnpm run dev</span
        >

        <span
          ><span class="text-neutral-400">// create a production version of your app</span>
        pnpm run build</span
        >
        
        <span
          ><span class="text-neutral-400">// preview the production build</span>
        pnpm run preview</span
        ></code
      >
    </pre>
  </section>

  <!-- getting data from db -->
  <section class="mt-16 border-t-2 pb-16">
    <h2 id={section3} class="py-4 text-4xl">{section3}</h2>
    <br />
    <p>
      Data communication is done by querying the <code class="text-neutral-500">/api</code> route. Compose
      fetch requests with appropriate data to receive a HTTP response from the endpoint.
    </p>
    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Sets</h3>
    <br />
    <p>GET</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400">// the request body must contain the userId: number</span>
        const request = await fetch('./api/sets', &#123;
        &nbsp;&nbsp;method: GET,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;userId: 1
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// if successful the queried data will be in the response body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.sets: [&#123;set1&#125;, &#123;set2&#125;, &#123;set3&#125;, ...]</span
        >
        </code>
    </pre>
    <br />
    <p>POST</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain the userId: number,
           // image: string, title: string, desc: string</span
        >
        const request = await fetch('./api/sets', &#123;
        &nbsp;&nbsp;method: POST,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;image: 'http://url',
        &nbsp;&nbsp;&nbsp;&nbsp;title: 'Pokemon Deck',
        &nbsp;&nbsp;&nbsp;&nbsp;desc: 'A collection of Pokemon trading cards',
        &nbsp;&nbsp;&nbsp;&nbsp;userId: 1
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'new set id=newSet.cardSetId added to database'</span
        ></code
      >
    </pre>
    <br />
    <p>PATCH</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain the setId: number,
           // image: string, title: string, desc: string</span
        >
        const request = await fetch('./api/sets', &#123;
        &nbsp;&nbsp;method: PATCH,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;image: form.image,
        &nbsp;&nbsp;&nbsp;&nbsp;title: form.title,
        &nbsp;&nbsp;&nbsp;&nbsp;desc: form.desc,
        &nbsp;&nbsp;&nbsp;&nbsp;setId: set.setId
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'successfully updated set id=set.setId from database'</span
        ></code
      >
    </pre>
    <br />
    <p>DELETE</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain the id_cardSets: number</span
        >
        const request = await fetch('./api/sets', &#123;
        &nbsp;&nbsp;method: DELETE,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;id_cardSets: 3
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'successfully deleted set id=3 from database'</span
        ></code
      >
    </pre>

    <h3 class="my-2 border-b-[1px] pt-8 pb-1.5 text-2xl">Cards</h3>
    <br />
    <p>GET</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400">// the request body must contain the setId: number</span>
        const request = await fetch('./api/cards', &#123;
        &nbsp;&nbsp;method: GET,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;setId: 1
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// if successful the queried data will be in the response body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.sets: [&#123;card1&#125;, &#123;card2&#125;, &#123;card3&#125;, ...]</span
        ></code
      >
    </pre>
    <br />
    <p>POST</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain the setId: number,
           // image: string, text: string, desc: string</span
        >
        const request = await fetch('./api/cards', &#123;
        &nbsp;&nbsp;method: POST,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;image: 'http://url',
        &nbsp;&nbsp;&nbsp;&nbsp;text: 'Pikachu Card',
        &nbsp;&nbsp;&nbsp;&nbsp;desc: 'electric',
        &nbsp;&nbsp;&nbsp;&nbsp;setId: 1
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'new card id=newCard.cardId added to database'</span
        ></code
      >
    </pre>
    <br />
    <p>PATCH</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain the cardId: number,
           // image: string, text: string, desc: string</span
        >
        const request = await fetch('./api/cards', &#123;
        &nbsp;&nbsp;method: PATCH,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;image: form.image,
        &nbsp;&nbsp;&nbsp;&nbsp;text: form.text,
        &nbsp;&nbsp;&nbsp;&nbsp;desc: form.desc,
        &nbsp;&nbsp;&nbsp;&nbsp;cardId: card.cardId
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'successfully updated card id=card.cardId from database'</span
        ></code
      >
    </pre>
    <br />
    <p>DELETE</p>
    <pre
      class="mb-1 block whitespace-pre-line rounded-md bg-gray-50 p-4 text-sm text-slate-700 shadow-inner">
      <code
        ><span class="text-neutral-400"
          >// the request body must contain
          // id_cardSets: number, id_card: number</span
        >
        const request = await fetch('./api/cards', &#123;
        &nbsp;&nbsp;method: DELETE,
        &nbsp;&nbsp;body: JSON.stringify(&#123;
        &nbsp;&nbsp;&nbsp;&nbsp;id_cardSets: 1,
        &nbsp;&nbsp;&nbsp;&nbsp;id_card: 4
        &nbsp;&nbsp;&#125;),
        &nbsp;&nbsp;headers: &#123;
        &nbsp;&nbsp;'content-type': 'application/json'
        &nbsp;&nbsp;&#125;
        &#125;);

        <span class="text-neutral-400"
          >// the response will contain a message and status code in the body</span
        >
        const response = await request.json();

        <span class="text-neutral-400"
          >// response.body.message: 'successfully deleted card id=4 from setId=1'</span
        ></code
      >
    </pre>
  </section>

  <!-- contribution guidelines -->
  <section class="mt-16 border-t-2 pb-16">
    <h2 id={section4} class="py-4 text-4xl">{section4}</h2>
    <br />

    <p>
      Doted is built on Sveltekit, so Learn to use <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://svelte.dev/">Svelte</a
      >. Go through the
      <a class="text-blue-600 hover:text-blue-400 hover:underline" href="#{section1}">user guide</a
      >. Does everything work as expected? If not, we're always looking for improvements. Let us
      know by opening an
      <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://github.com/t5g5/mono/issues">issue</a
      >.
    </p>
    <br />
    <p>
      Look through the open issues and see if any are within your capability to resolve. Provide
      workarounds, ask for clarification, or suggest labels.
    </p>
    <br />
    <p>
      If you find an issue you would like to fix, open a <a
        class="text-blue-600 hover:text-blue-400 hover:underline"
        href="https://github.com/t5g5/mono/pulls">pull request</a
      >.
    </p>
    <br />
    <p>
      Take a look at the features requested by others in the community and consider opening a pull
      request if you see something you want to work on.
    </p>
    <br />
  </section>
</div>

<style>
  section > * {
    max-width: 36rem;
  }
  .custom-shadow {
    box-shadow: 5px 5px 0.8px rgba(0, 0, 0, 0.9);
  }
  .custom-shadow:active {
    box-shadow: inset 2px 2px 0.8px rgba(0, 0, 0, 0.6);
  }
</style>
