import type { TraitKey } from './traits.types';

export const LegendKeys = ['bonJovi', 'meatloaf', 'prince'] as const;
export type LegendKey = (typeof LegendKeys)[number];

export type LegendDefinition = {
  label: string;
  bonus: TraitKey;
  malus: TraitKey;
};

export const Legends: Record<LegendKey, LegendDefinition> = {
  bonJovi: {
    label: 'The Lover',
    bonus: 'energetic',
    malus: 'spiritual'
  },
  meatloaf: {
    label: 'The Mystic',
    bonus: 'generous',
    malus: 'prudent'
  },
  prince: {
    label: 'The Visionary',
    bonus: 'prudent',
    malus: 'chaste'
  }
};
