import type { PageLoad } from './$types';
import { forms } from '$lib/forms';
import type { CharacterData } from '$lib/character.types';

const playerKnightModules = import.meta.glob('/src/lib/characters/salisbury/player-knights/*.json', {
  eager: true
}) as Record<string, { default: CharacterData }>;

export const load: PageLoad = () => ({
  playerKnights: Object.entries(playerKnightModules)
    .map(([path, module]) => ({
      name: module.default.name,
      glory: module.default.glory,
      form: forms[module.default.form].label,
      slug: path.split('/').at(-1)?.replace(/\.json$/, '') ?? ''
    }))
    .sort((first, second) => second.glory - first.glory)
});
