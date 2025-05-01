import type { PageLoad } from './$types';
import { traitKeys, type NullableTraitEntry, type TraitKey } from '$lib/traits.types';
import {
  combatSkillKeys,
  nonCombatSkillKeys,
  type NullableSkillEntry,
  type SkillKey
} from '$lib/skills.types';
import {
  type NullableParameterlessPassionEntry,
  type NullablePassionEntry
} from '$lib/passions.types';
import type { CharacterViewModel } from '$lib/character.types';

export const load: PageLoad = async () => {
  const traits = Object.fromEntries(
    traitKeys.map((key) => [key, { value: null, virtueChecked: false, viceChecked: false }])
  ) as Record<TraitKey, NullableTraitEntry>;

  const passions = [
    { key: 'honour', value: null },
    { key: 'hospitality', value: null },
    { key: 'loyalty', parameter: 'Lord', value: null },
    { key: 'love', parameter: 'Family', value: null },
    { key: null, value: null } as NullableParameterlessPassionEntry,
    { key: null, value: null } as NullableParameterlessPassionEntry,
    { key: null, value: null } as NullableParameterlessPassionEntry
  ] as NullablePassionEntry[];

  const skills = Object.fromEntries(
    [...combatSkillKeys, ...nonCombatSkillKeys].map((key) => [key, { value: null, checked: false }])
  ) as Record<SkillKey, NullableSkillEntry>;

  return {
    character: {
      name: '',
      traits,
      passions,
      skills
    } as CharacterViewModel
  };
};
