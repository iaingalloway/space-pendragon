<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  interface Props {
    error?: Error | null;
    children: import('svelte').Snippet;
    fallback?: import('svelte').Snippet<[Error, () => void]>;
  }

  let { error = null, children, fallback }: Props = $props();

  const dispatch = createEventDispatcher<{
    error: { error: Error; errorInfo: Record<string, unknown> };
    reset: undefined;
  }>();

  let hasError = $state(false);
  let errorDetails = $state<Error | null>(null);

  $effect(() => {
    if (error) {
      hasError = true;
      errorDetails = error;
      dispatch('error', { error, errorInfo: {} });
    }
  });

  function resetError(): void {
    hasError = false;
    errorDetails = null;
    dispatch('reset');
  }
</script>

{#if hasError && errorDetails}
  {#if fallback}
    {@render fallback(errorDetails, resetError)}
  {:else}
    <div
      class="error-boundary bg-error-50-900-token border-error-200-700-token rounded-lg border p-6"
    >
      <h2 class="text-error-900-50-token mb-4 text-xl font-semibold">Something went wrong</h2>
      <details class="mb-4">
        <summary class="text-error-700-200-token hover:text-error-600-300-token cursor-pointer">
          Error details
        </summary>
        <pre class="bg-surface-100-800-token mt-2 overflow-auto rounded p-3 text-sm">
{errorDetails.message}
{#if errorDetails.stack}
            {errorDetails.stack}
          {/if}
        </pre>
      </details>
      <button
        onclick={resetError}
        class="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-white transition-colors"
      >
        Try again
      </button>
    </div>
  {/if}
{:else}
  {@render children()}
{/if}
