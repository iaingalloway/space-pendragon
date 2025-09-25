import type { PageLoad } from './$types';
import { type NullableTraitEntry, type TraitKey, traitKeys } from '$lib/traits.types';
import type { NullableCombatSkillEntry, NullableNonCombatSkillEntry } from '$lib/skills.types';
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

  const combatSkills = [
    { key: 'battle', value: null },
    { key: 'piloting', value: null },
    { key: 'laserLance', value: null },
    { key: 'sword', value: null }
  ] as NullableCombatSkillEntry[];

  const nonCombatSkills = [
    { key: null, value: null } as NullableNonCombatSkillEntry,
    { key: null, value: null } as NullableNonCombatSkillEntry,
    { key: null, value: null } as NullableNonCombatSkillEntry,
    { key: null, value: null } as NullableNonCombatSkillEntry,
    { key: null, value: null } as NullableNonCombatSkillEntry,
    { key: null, value: null } as NullableNonCombatSkillEntry
  ];

  return {
    character: {
      name: '',
      houseWords: '',
      traits,
      passions,
      combatSkills,
      nonCombatSkills
    } as CharacterViewModel
  };
};
