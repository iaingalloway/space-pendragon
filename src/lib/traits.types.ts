export const traitKeys = [
  'chaste',
  'energetic',
  'forgiving',
  'generous',
  'honest',
  'just',
  'merciful',
  'modest',
  'prudent',
  'spiritual',
  'temperate',
  'trusting',
  'valorous'
] as const;

export type TraitKey = (typeof traitKeys)[number];

export interface TraitDefinition {
  virtueLabel: string;
  viceLabel: string;
}

export interface TraitEntry {
  value: number | null;
  virtueChecked?: boolean;
  viceChecked?: boolean;
}

export interface NullableTraitEntry {
  value: number | null;
  virtueChecked?: boolean;
  viceChecked?: boolean;
}
