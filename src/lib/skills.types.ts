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

export const combatSkillKeys = ['battle', 'piloting', 'laserLance', 'sword'] as const;

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

export interface NullableCombatSkillEntry {
  key: CombatSkillKey | null;
  value: number | null;
  checked?: boolean;
}

export interface NullableNonCombatSkillEntry {
  key: NonCombatSkillKey | null;
  value: number | null;
  checked?: boolean;
}

const combatSet = new Set<SkillKey>(combatSkillKeys);
const nonCombatSet = new Set<SkillKey>(nonCombatSkillKeys);

export function isCombatSkill(key: SkillKey): boolean {
  return combatSet.has(key);
}

export function isNonCombatSkill(key: SkillKey): boolean {
  return nonCombatSet.has(key);
}
