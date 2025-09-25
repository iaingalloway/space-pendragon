import type { PageLoad } from './$types';
import { type NullableTraitEntry, type TraitKey, traitKeys } from '$lib/traits.types';
import type { NullableCombatSkillEntry, NullableNonCombatSkillEntry } from '$lib/skills.types';
import {
  type NullableParameterlessPassionEntry,
  type NullablePassionEntry
} from '$lib/passions.types';
import type { CharacterViewModel } from '$lib/character.types';
import { forms, formKeys, type FormKey } from '$lib/forms';
import { legends, legendKeys, type LegendKey } from '$lib/legends';

export const load: PageLoad = async ({ url }) => {
  const formParam = url.searchParams.get('form');
  const legendParam = url.searchParams.get('legend');

  const formKey =
    formParam && (formKeys as readonly string[]).includes(formParam)
      ? (formParam as FormKey)
      : undefined;

  const legendKey =
    legendParam && (legendKeys as readonly string[]).includes(legendParam)
      ? (legendParam as LegendKey)
      : undefined;

  const formDef = formKey ? forms[formKey] : undefined;
  const legendDef = legendKey ? legends[legendKey] : undefined;

  const shouldPrefillTraits = Boolean(formDef || legendDef);

  const traits = Object.fromEntries(
    traitKeys.map((key) => [
      key,
      {
        value: shouldPrefillTraits ? 10 : null,
        virtueChecked: false,
        viceChecked: false
      }
    ])
  ) as Record<TraitKey, NullableTraitEntry>;

  if (legendDef) {
    traits[legendDef.bonus].value = (traits[legendDef.bonus].value ?? 10) + 3;
    traits[legendDef.malus].value = (traits[legendDef.malus].value ?? 10) - 3;
  }
  if (formDef) {
    traits[formDef.bonus].value = (traits[formDef.bonus].value ?? 10) + 2;
    traits[formDef.malus].value = (traits[formDef.malus].value ?? 10) - 2;
  }

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

  const aestheticParts = [formDef?.aesthetic, legendDef?.aesthetic].filter(Boolean) as string[];
  const aesthetic = aestheticParts.join(', ');

  return {
    character: {
      name: '',
      houseWords: '',
      legend: legendDef?.label ?? '',
      flaw: legendDef?.flaw ?? '',
      grailQuestion: legendDef?.grailQuestion ?? '',
      form: formKey,
      aesthetic,
      traits,
      passions,
      combatSkills,
      nonCombatSkills
    } as CharacterViewModel
  };
};
