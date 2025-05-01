import { type TraitKey, type TraitEntry, type NullableTraitEntry, traitKeys } from './traits.types';
import type { PassionEntry, NullablePassionEntry } from './passions.types';
import { type SkillKey, type SkillEntry, type NullableSkillEntry, skillKeys } from './skills.types';

export type CharacterData = {
  name: string;
  glory: number;
  traits: Partial<Record<TraitKey, TraitEntry>>;
  passions: PassionEntry[];
  skills: Partial<Record<SkillKey, SkillEntry>>;
};

export type CharacterViewModel = {
  name: string;
  glory?: number;
  traits: Record<TraitKey, NullableTraitEntry>;
  passions: NullablePassionEntry[];
  skills: Record<SkillKey, NullableSkillEntry>;
};

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
