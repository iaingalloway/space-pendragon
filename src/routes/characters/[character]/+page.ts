import type { PageLoad } from './$types';
import { type CharacterViewModel, toViewModel } from '$lib/character.types';

export const load: PageLoad = async ({ params }) => {
  const module = await import(`../../../lib/characters/${params.character}.json`);
  return {
    character: toViewModel(module.default) as CharacterViewModel
  };
};
