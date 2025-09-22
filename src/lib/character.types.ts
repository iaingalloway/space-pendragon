import { type NullableTraitEntry, type TraitEntry, type TraitKey, traitKeys } from './traits.types';
import type { NullablePassionEntry, PassionEntry } from './passions.types';
import {
  type SkillKey,
  type SkillEntry,
  type NullableCombatSkillEntry,
  type NullableNonCombatSkillEntry,
  isCombatSkill,
  isNonCombatSkill
} from './skills.types';

export interface CharacterData {
  name: string;
  glory: number;
  traits: Partial<Record<TraitKey, TraitEntry>>;
  passions: PassionEntry[];
  skills: Partial<Record<SkillKey, SkillEntry>>;
}

export interface CharacterViewModel {
  name: string;
  glory?: number;
  traits: Record<TraitKey, NullableTraitEntry>;
  passions: NullablePassionEntry[];
  combatSkills: NullableCombatSkillEntry[];
  nonCombatSkills: NullableNonCombatSkillEntry[];
}

export function toViewModel(data: CharacterData): CharacterViewModel {
  const traits: Record<TraitKey, TraitEntry> = Object.fromEntries(
    traitKeys.map((key) => [
      key,
      data.traits[key] ?? {
        value: 10,
        virtueChecked: false,
        viceChecked: false
      }
    ])
  ) as Record<TraitKey, TraitEntry>;

  const skills = Object.entries(data.skills).map(([key, value]) => ({
    key: key as SkillKey,
    value: value.value ?? 0,
    checked: false
  }));

  return {
    name: data.name,
    glory: data.glory,
    traits,
    passions: data.passions,
    combatSkills: skills.filter((s) => s.key && isCombatSkill(s.key)) as NullableCombatSkillEntry[],
    nonCombatSkills: skills.filter(
      (s) => s.key && isNonCombatSkill(s.key)
    ) as NullableNonCombatSkillEntry[]
  };
}
