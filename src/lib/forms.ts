import type { TraitKey } from './traits.types';

export const formKeys = [
  'bat',
  'bear',
  'cat',
  'crocodile',
  'deer',
  'dolphin',
  'dog',
  'elephant',
  'fox',
  'hawk',
  'horse',
  'lion',
  'mouse',
  'owl',
  'raven',
  'snake',
  'stag',
  'tiger',
  'wolf'
] as const;

export type FormKey = (typeof formKeys)[number];

export interface FormDefinition {
  label: string;
  aesthetic: string;
  instinct: string;
  bonus: TraitKey;
  malus: TraitKey;
}

export const forms: Record<FormKey, FormDefinition> = {
  bat: {
    label: 'Bat',
    aesthetic: 'Shadowy, Elusive',
    instinct: 'Listen',
    bonus: 'spiritual',
    malus: 'prudent'
  },
  bear: {
    label: 'Bear',
    aesthetic: 'Massive, Gentle',
    instinct: 'Defend',
    bonus: 'generous',
    malus: 'prudent'
  },
  cat: {
    label: 'Cat',
    aesthetic: 'Aloof, Elegant',
    instinct: 'Withdraw',
    bonus: 'generous',
    malus: 'temperate'
  },
  crocodile: {
    label: 'Crocodile',
    aesthetic: 'Slow, Lurking',
    instinct: 'Ambush',
    bonus: 'prudent',
    malus: 'trusting'
  },
  deer: {
    label: 'Deer',
    aesthetic: 'Soft, Graceful',
    instinct: 'Escape',
    bonus: 'temperate',
    malus: 'trusting'
  },
  dolphin: {
    label: 'Dolphin',
    aesthetic: 'Sleek, Curious',
    instinct: 'Explore',
    bonus: 'trusting',
    malus: 'just'
  },
  dog: {
    label: 'Dog',
    aesthetic: 'Friendly, Reliable',
    instinct: 'Follow',
    bonus: 'chaste',
    malus: 'energetic'
  },
  elephant: {
    label: 'Elephant',
    aesthetic: 'Slow, Monumental',
    instinct: 'Endure',
    bonus: 'spiritual',
    malus: 'generous'
  },
  fox: {
    label: 'Fox',
    aesthetic: 'Sleek, Cunning',
    instinct: 'Deceive',
    bonus: 'energetic',
    malus: 'honest'
  },
  hawk: {
    label: 'Hawk',
    aesthetic: 'Sharp, Precise',
    instinct: 'Watch',
    bonus: 'prudent',
    malus: 'spiritual'
  },
  horse: {
    label: 'Horse',
    aesthetic: 'Strong, Steady',
    instinct: 'Serve',
    bonus: 'trusting',
    malus: 'modest'
  },
  lion: {
    label: 'Lion',
    aesthetic: 'Regal, Commanding',
    instinct: 'Rule',
    bonus: 'just',
    malus: 'modest'
  },
  mouse: {
    label: 'Mouse',
    aesthetic: 'Small, Agile',
    instinct: 'Persist',
    bonus: 'modest',
    malus: 'energetic'
  },
  owl: {
    label: 'Owl',
    aesthetic: 'Quiet, Mysterious',
    instinct: 'Analyze',
    bonus: 'spiritual',
    malus: 'honest'
  },
  raven: {
    label: 'Raven',
    aesthetic: 'Dark, Mysterious',
    instinct: 'Uncover',
    bonus: 'honest',
    malus: 'prudent'
  },
  snake: {
    label: 'Snake',
    aesthetic: 'Fluid, Sinister',
    instinct: 'Tempt',
    bonus: 'chaste',
    malus: 'temperate'
  },
  stag: {
    label: 'Stag',
    aesthetic: 'Graceful, Fragile',
    instinct: 'Remember',
    bonus: 'chaste',
    malus: 'modest'
  },
  tiger: {
    label: 'Tiger',
    aesthetic: 'Powerful, Agile',
    instinct: 'Hunt',
    bonus: 'energetic',
    malus: 'generous'
  },
  wolf: {
    label: 'Wolf',
    aesthetic: 'Lean, Savage',
    instinct: 'Protect',
    bonus: 'temperate',
    malus: 'just'
  }
};
