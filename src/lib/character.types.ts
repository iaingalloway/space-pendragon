import { type NullableTraitEntry, type TraitEntry, type TraitKey, traitKeys } from './traits.types';
import type { NullablePassionEntry, PassionEntry } from './passions.types';
import {
  type SkillKey,
  type NullableMartialSkillEntry,
  type NullableCourtlySkillEntry,
  isMartialSkill,
  isCourtlySkill
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
  martialSkills: NullableMartialSkillEntry[];
  courtlySkills: NullableCourtlySkillEntry[];
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
    martialSkills: skills.filter((s) => s.key && isMartialSkill(s.key)) as NullableMartialSkillEntry[],
    courtlySkills: skills.filter(
      (s) => s.key && isCourtlySkill(s.key)
    ) as NullableCourtlySkillEntry[]
  };
}
