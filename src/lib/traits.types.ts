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

export type TraitDefinition = {
  virtueLabel: string;
  viceLabel: string;
};

export type TraitEntry = {
  value: number | null;
  virtueChecked?: boolean;
  viceChecked?: boolean;
};

export type NullableTraitEntry = {
  value: number | null;
  virtueChecked?: boolean;
  viceChecked?: boolean;
};
