<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { store } from '../hooks/auth';

  const dispatch = createEventDispatcher();
  function uploaded(url) {
    dispatch('uploaded', {
      url: url
    });
  }
  export let imagePrev;
  let fileInput;
  let files;

  export function open() {
    fileInput.click();
  }

  function getBase64(image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      imagePrev = e.target.result;
      uploadFunction(e.target.result);
    };
  }

  async function uploadFunction(imgBase64) {
    const imgData = imgBase64.split(',');
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        image: imgData[1],
        type: imgData[0],
        tag: 'image',
        userId: $store.userId
      })
    });
    const result = await res.json();
    if (result.success) {
      uploaded(result.data);
    }
  }
</script>

<input
  class="hidden"
  id="file-to-upload"
  type="file"
  accept=".png,.jpg"
  bind:files
  bind:this={fileInput}
  on:change={() => getBase64(files[0])}
/>
