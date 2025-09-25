<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();
</script>

<svelte:head>
  <title>{$page.data?.title ? `${$page.data.title} | Space Pendragon` : 'Space Pendragon'}</title>
</svelte:head>

<div class="bg-surface-50-900-token min-h-screen">
  <nav class="bg-surface-100-800-token border-surface-200-700-token border-b">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <a
            href="/"
            class="text-primary-500 hover:text-primary-400 text-xl font-bold transition-colors"
          >
            Space Pendragon
          </a>
        </div>
        <div class="flex space-x-4">
          <a
            href="/characters"
            class="text-surface-600-300-token hover:text-primary-500 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            class:text-primary-500={$page.url.pathname.startsWith('/characters')}
          >
            Characters
          </a>
          <a
            href="/legends"
            class="text-surface-600-300-token hover:text-primary-500 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            class:text-primary-500={$page.url.pathname.startsWith('/legends')}
          >
            Legends
          </a>
          <a
            href="/forms"
            class="text-surface-600-300-token hover:text-primary-500 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            class:text-primary-500={$page.url.pathname.startsWith('/forms')}
          >
            Forms
          </a>
          <a
            href="/mechs"
            class="text-surface-600-300-token hover:text-primary-500 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            class:text-primary-500={$page.url.pathname.startsWith('/mechs')}
          >
            Mechs
          </a>
        </div>
      </div>
    </div>
  </nav>

  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    {@render children()}
  </main>
</div>
