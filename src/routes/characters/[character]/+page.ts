import type { PageLoad } from './$types';
import { type CharacterViewModel, toViewModel } from '$lib/character.types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  try {
    const characterName = params.character;

    if (!characterName) {
      throw error(400, 'Character name is required');
    }

    // Validate character name format
    if (!/^[a-zA-Z0-9\-_]+$/.test(characterName)) {
      throw error(400, 'Invalid character name format');
    }

    const module = await import(`../../../lib/characters/${characterName}.json`);

    if (!module.default) {
      throw error(404, `Character '${characterName}' not found`);
    }

    const character = toViewModel(module.default) as CharacterViewModel;

    return {
      character,
      title: character.name || 'Character Sheet'
    };
  } catch (err) {
    // Handle module import errors (e.g., file not found)
    if (err instanceof Error && 'code' in err) {
      throw err; // Re-throw SvelteKit errors
    }

    console.error('Error loading character:', err);
    throw error(404, `Character '${params.character}' not found`);
  }
};
