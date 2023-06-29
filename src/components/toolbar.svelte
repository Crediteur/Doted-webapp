<script lang="ts">
  //export let cardCount = 0;
</script>

<div class="fixed bottom-0 left-1/2 w-full max-w-[calc(72rem-4rem)] -translate-x-1/2">
  <!-- main row -->
  <div class="custom-border flex h-14 flex-row justify-between gap-2 bg-madagascarPink p-4 px-8">
    <!-- extra *unused icons -->
    <div class="hidden translate-y-1 flex-row justify-center gap-8 self-center md:inline-flex">
      <div>
        <span class="local-material-symbols-outlined text-3xl"> menu_book </span>
      </div>
      <div>
        <span class="local-material-symbols-outlined text-3xl"> star </span>
      </div>
      <div>
        <span class="local-material-symbols-outlined text-3xl"> palette </span>
      </div>
    </div>

    <!-- forward/backward buttons -->
    <div class="inline-flex -translate-y-7 flex-row gap-4 md:translate-x-2.5">
      <div class="self-center">
        <slot name="bLeft">
          <!-- bleft slot -->
        </slot>
      </div>
      <div class="self-center">
        <slot name="bRight">
          <!-- right slot -->
        </slot>
      </div>
    </div>

    <div class="inline-flex -translate-y-7 flex-row gap-4">
      <!-- b1 -->
      <div class="hidden self-center sm:inline">
        <slot name="b1">
          <!-- b1 slot -->
        </slot>
      </div>
      <!-- b2 -->
      <div class="hidden self-center sm:inline">
        <slot name="b2">
          <!-- b2 slot -->
        </slot>
      </div>
      <!-- b3 -->
      <div class="self-center">
        <slot name="b3">
          <!-- b3 slot -->
        </slot>
      </div>
    </div>
  </div>
</div>

<style>
  .custom-border {
    border-radius: 10px 10px 0px 0px;
    box-shadow: 8px 8px 0.8px rgba(0, 0, 0, 0.9);
  }
</style>
