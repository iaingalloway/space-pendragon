export const nonCombatSkillKeys = [
  'awareness',
  'compose',
  'courtesy',
  'dancing',
  'falconry',
  'fashion',
  'firstAid',
  'flirting',
  'folklore',
  'gaming',
  'hunting',
  'intrigue',
  'literacy',
  'orate',
  'playInstrument',
  'recognise',
  'sing',
  'stewardship'
] as const;

export const combatSkillKeys = ['battle', 'piloting', 'sword', 'laserLance'] as const;

export const skillKeys = [...nonCombatSkillKeys, ...combatSkillKeys] as const;

export type NonCombatSkillKey = (typeof nonCombatSkillKeys)[number];
export type CombatSkillKey = (typeof combatSkillKeys)[number];
export type SkillKey = NonCombatSkillKey | CombatSkillKey;

export interface SkillDefinition {
  label: string;
}

export interface SkillEntry {
  value: number;
  checked?: boolean;
}

export interface NullableSkillEntry {
  value: number | null;
  checked?: boolean;
}
