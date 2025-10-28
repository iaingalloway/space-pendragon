export const courtlySkillKeys = [
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

export const martialSkillKeys = ['battle', 'piloting', 'laserLance', 'sword'] as const;

export const skillKeys = [...courtlySkillKeys, ...martialSkillKeys] as const;

export type CourtlySkillKey = (typeof courtlySkillKeys)[number];
export type MartialSkillKey = (typeof martialSkillKeys)[number];
export type SkillKey = CourtlySkillKey | MartialSkillKey;

export interface SkillDefinition {
  label: string;
}

export interface NullableMartialSkillEntry {
  key: MartialSkillKey | null;
  value: number | null;
  checked?: boolean;
}

export interface NullableCourtlySkillEntry {
  key: CourtlySkillKey | null;
  value: number | null;
  checked?: boolean;
}

const martialSet = new Set<SkillKey>(martialSkillKeys);
const courtlySet = new Set<SkillKey>(courtlySkillKeys);

export function isMartialSkill(key: SkillKey): boolean {
  return martialSet.has(key);
}

export function isCourtlySkill(key: SkillKey): boolean {
  return courtlySet.has(key);
}
