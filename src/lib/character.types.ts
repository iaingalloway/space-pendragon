import { type NullableTraitEntry, type TraitEntry, type TraitKey, traitKeys } from './traits.types';
import type { NullablePassionEntry, PassionEntry } from './passions.types';
import { type NullableSkillEntry, type SkillEntry, type SkillKey, skillKeys } from './skills.types';

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
  skills: Record<SkillKey, NullableSkillEntry>;
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

  const skills: Record<SkillKey, SkillEntry> = Object.fromEntries(
    skillKeys.map((key) => [
      key,
      data.skills[key] ?? {
        value: 0,
        checked: false
      }
    ])
  ) as Record<SkillKey, SkillEntry>;

  return {
    name: data.name,
    glory: data.glory,
    traits,
    passions: data.passions,
    skills
  };
}
