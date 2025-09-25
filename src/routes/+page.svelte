<script lang="ts">
  import { onMount } from 'svelte';

  // Sample character data for quick access
  const sampleCharacters = [
    { name: 'Arfius', description: 'A just knight with strong loyalties' },
    { name: 'Baastias', description: 'A complex character with varied traits' },
    { name: 'Madoc', description: 'A seasoned warrior with experience' }
  ];

  const quickLinks = [
    { href: '/legends', title: 'Legends', description: 'Explore legendary archetypes' },
    { href: '/forms', title: 'Forms', description: 'Animal spirit forms and their traits' },
    { href: '/mechs', title: 'Mechs', description: 'Mechanical companions and their quirks' }
  ];

  onMount(() => {
    // Add any initialization logic here if needed
    return () => {
      // Cleanup logic
    };
  });
</script>

<svelte:head>
  <title>Space Pendragon - Character Sheets & RPG Tools</title>
  <meta
    name="description"
    content="Manage your Space Pendragon RPG characters, explore legends, forms, and mechs in this digital companion tool."
  />
</svelte:head>

<div class="space-y-8">
  <header class="text-center">
    <h1 class="text-surface-900-50-token mb-4 text-4xl font-bold">Welcome to Space Pendragon</h1>
    <p class="text-surface-600-300-token mx-auto max-w-2xl text-lg">
      Your digital companion for managing Pendragon RPG characters set in the vastness of space.
      Explore character sheets, legendary archetypes, mystical forms, and mechanical companions.
    </p>
  </header>

  <div class="grid gap-8 md:grid-cols-2">
    <!-- Character Section -->
    <section class="space-y-4">
      <h2
        class="text-surface-800-100-token border-surface-200-700-token border-b pb-2 text-2xl font-semibold"
      >
        Sample Characters
      </h2>
      <div class="space-y-3">
        <div class="bg-surface-100-800-token rounded-lg p-4">
          <a
            href="/characters"
            class="text-primary-600-400-token hover:text-primary-500 mb-2 block text-lg font-medium transition-colors"
            aria-label="Create a blank character sheet"
          >
            Create New Character
          </a>
          <p class="text-surface-600-300-token text-sm">Start with a blank character sheet</p>
        </div>

        {#each sampleCharacters as character (character.name)}
          <div class="bg-surface-100-800-token rounded-lg p-4">
            <a
              href="/characters/{character.name.toLowerCase()}"
              class="text-primary-600-400-token hover:text-primary-500 mb-1 block text-lg font-medium transition-colors"
              aria-label="View {character.name}'s character sheet"
            >
              {character.name}
            </a>
            <p class="text-surface-600-300-token text-sm">{character.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="space-y-4">
      <h2
        class="text-surface-800-100-token border-surface-200-700-token border-b pb-2 text-2xl font-semibold"
      >
        Game References
      </h2>
      <div class="space-y-3">
        {#each quickLinks as link (link.href)}
          <div class="bg-surface-100-800-token rounded-lg p-4">
            <a
              href={link.href}
              class="text-primary-600-400-token hover:text-primary-500 mb-1 block text-lg font-medium transition-colors"
              aria-label="View {link.title}"
            >
              {link.title}
            </a>
            <p class="text-surface-600-300-token text-sm">{link.description}</p>
          </div>
        {/each}
      </div>
    </section>
  </div>

  <!-- Additional Info -->
  <section class="bg-surface-50-850-token mt-12 rounded-lg p-6 text-center">
    <h2 class="text-surface-800-100-token mb-2 text-xl font-semibold">About Space Pendragon</h2>
    <p class="text-surface-600-300-token mx-auto max-w-3xl">
      This application provides digital tools for managing characters in Pendragon RPG campaigns set
      in space. Track traits, passions, and skills while exploring legendary archetypes, animal
      spirit forms, and mechanical companions that define your character's journey among the stars.
    </p>
  </section>
</div>
