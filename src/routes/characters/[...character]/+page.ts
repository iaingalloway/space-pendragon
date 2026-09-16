import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { type CharacterData, type CharacterViewModel, toViewModel } from '$lib/character.types';

const characterModules = import.meta.glob('/src/lib/characters/**/*.json', { eager: true }) as Record<
  string,
  { default: CharacterData }
>;

export const load: PageLoad = async ({ params }) => {
  const module = characterModules[`/src/lib/characters/${params.character}.json`];

  if (!module) {
    error(404, 'Character not found');
  }

  return {
    character: toViewModel(module.default) as CharacterViewModel
  };
};
