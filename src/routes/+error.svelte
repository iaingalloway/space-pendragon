<script lang="ts">
  import { page } from '$app/stores';

  $: status = $page.status;
  $: message = $page.error?.message || 'An unexpected error occurred';
</script>

<svelte:head>
  <title>Error {status} | Space Pendragon</title>
</svelte:head>

<div class="error-page flex min-h-96 flex-col items-center justify-center space-y-6 text-center">
  <div class="error-icon text-error-500 text-6xl" aria-hidden="true">
    {#if status === 404}
      🔍
    {:else if status >= 500}
      ⚠️
    {:else}
      ❌
    {/if}
  </div>

  <div class="error-content space-y-4">
    <h1 class="text-surface-900-50-token text-4xl font-bold">
      {#if status === 404}
        Page Not Found
      {:else if status >= 500}
        Server Error
      {:else}
        Error {status}
      {/if}
    </h1>

    <p class="text-surface-600-300-token mx-auto max-w-md text-lg">
      {#if status === 404}
        The page or character you're looking for doesn't exist.
      {:else if status >= 500}
        Something went wrong on our end. Please try again later.
      {:else}
        {message}
      {/if}
    </p>
  </div>

  <div class="error-actions space-x-4">
    <a
      href="/"
      class="bg-primary-500 hover:bg-primary-600 inline-flex items-center rounded-lg px-4 py-2 text-white transition-colors"
    >
      Return Home
    </a>

    <button
      onclick={() => history.back()}
      class="bg-surface-200-700-token text-surface-700-200-token hover:bg-surface-300-600-token inline-flex items-center rounded-lg px-4 py-2 transition-colors"
    >
      Go Back
    </button>
  </div>

  {#if status === 404}
    <div class="helpful-links mt-8">
      <p class="text-surface-500-400-token mb-3 text-sm">Try these instead:</p>
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        <a href="/characters" class="text-primary-500 hover:text-primary-400 underline">
          Characters
        </a>
        <a href="/legends" class="text-primary-500 hover:text-primary-400 underline"> Legends </a>
        <a href="/forms" class="text-primary-500 hover:text-primary-400 underline"> Forms </a>
        <a href="/mechs" class="text-primary-500 hover:text-primary-400 underline"> Mechs </a>
      </div>
    </div>
  {/if}
</div>
