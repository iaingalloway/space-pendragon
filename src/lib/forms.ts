import type { TraitKey } from './traits.types';

export const FormKeys = ['bear', 'lion'] as const;
export type FormKey = (typeof FormKeys)[number];

export type FormDefinition = {
  label: string;
  bonus: TraitKey;
  malus: TraitKey;
};

export const Forms: Record<FormKey, FormDefinition> = {
  bear: {
    label: 'Bear',
    bonus: 'generous',
    malus: 'energetic'
  },
  lion: {
    label: 'Lion',
    bonus: 'just',
    malus: 'modest'
  }
};
