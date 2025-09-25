<script lang="ts">
  interface Props {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    centered?: boolean;
  }

  let { size = 'md', text = 'Loading...', centered = false }: Props = $props();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
</script>

<div
  class="loading-spinner {centered
    ? 'flex min-h-32 flex-col items-center justify-center'
    : 'inline-flex items-center space-x-2'}"
>
  <div
    class="border-surface-200-700-token border-t-primary-500 animate-spin rounded-full border-2 {sizeClasses[
      size
    ]}"
    role="status"
    aria-label={text}
  ></div>
  {#if text}
    <span class="text-surface-600-300-token {textSizeClasses[size]}">
      {text}
    </span>
  {/if}
</div>

<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
