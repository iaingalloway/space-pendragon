import { type NullableTraitEntry, type TraitEntry, type TraitKey, traitKeys } from './traits.types';
import type { NullablePassionEntry, PassionEntry } from './passions.types';
import {
  type SkillKey,
  type NullableCombatSkillEntry,
  type NullableNonCombatSkillEntry,
  isCombatSkill,
  isNonCombatSkill
} from './skills.types';
import type { FormKey } from './forms';

export interface CharacterData {
  name: string;
  glory: number;
  houseWords: string | undefined;
  traits: Partial<Record<TraitKey, number>>;
  passions: PassionEntry[];
  legend: string;
  flaw: string;
  grailQuestion: string;
  form: FormKey;
  aesthetic: string;
  skills: Partial<Record<SkillKey, number>>;
  notes: string[];
}

export interface CharacterViewModel {
  name: string;
  glory?: number;
  houseWords: string | undefined;
  traits: Record<TraitKey, NullableTraitEntry>;
  passions: NullablePassionEntry[];
  legend: string;
  flaw: string;
  grailQuestion: string;
  form?: FormKey;
  aesthetic: string;
  combatSkills: NullableCombatSkillEntry[];
  nonCombatSkills: NullableNonCombatSkillEntry[];
}

export function toViewModel(data: CharacterData): CharacterViewModel {
  const traits: Record<TraitKey, TraitEntry> = Object.fromEntries(
    traitKeys.map((key) => [
      key,
      {
        value: data.traits[key] ?? 10,
        virtueChecked: false,
        viceChecked: false
      }
    ])
  ) as Record<TraitKey, TraitEntry>;

  const skills = Object.entries(data.skills).map(([key, value]) => ({
    key: key as SkillKey,
    value: value ?? 0,
    checked: false
  }));

  return {
    name: data.name,
    glory: data.glory,
    houseWords: data.houseWords,
    legend: data.legend,
    flaw: data.flaw,
    grailQuestion: data.grailQuestion,
    form: data.form,
    aesthetic: data.aesthetic,
    traits,
    passions: data.passions,
    combatSkills: skills.filter((s) => s.key && isCombatSkill(s.key)) as NullableCombatSkillEntry[],
    nonCombatSkills: skills.filter(
      (s) => s.key && isNonCombatSkill(s.key)
    ) as NullableNonCombatSkillEntry[]
  };
}
