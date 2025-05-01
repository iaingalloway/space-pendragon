import type { TraitKey } from './traits.types';

export const legendKeys = [
  'billyIdol',
  'bonJovi',
  'davidBowie',
  'debbieHarry',
  'freddieMercury',
  'graceJones',
  'janisJoplin',
  'jimSteinman',
  'joanJett',
  'kateBush',
  'meatloaf',
  'patBenatar',
  'prince',
  'robertSmith',
  'siouxsieSioux',
  'stevieNicks'
] as const;
export type LegendKey = (typeof legendKeys)[number];

export interface LegendDefinition {
  label: string;
  aesthetic: string;
  flaw: string;
  grailQuestion: string;
  bonus: TraitKey;
  malus: TraitKey;
}

export const legends: Record<LegendKey, LegendDefinition> = {
  billyIdol: {
    label: 'The Wildcard',
    aesthetic: 'Rebellious, Punk',
    flaw: 'Self-destructive thrill-seeker',
    grailQuestion: 'Can I outrun regret?',
    bonus: 'energetic',
    malus: 'prudent'
  },
  bonJovi: {
    label: 'The Believer',
    aesthetic: 'Earnest, Heartfelt',
    flaw: 'Faith blinds to harsh realities',
    bonus: 'trusting',
    malus: 'generous',
    grailQuestion: 'Is hope always naive?'
  },
  davidBowie: {
    label: 'The Prophet',
    aesthetic: 'Surreal, Glamourous',
    flaw: 'Identity in constant flux',
    grailQuestion: 'Who am I beneath the masks?',
    bonus: 'honest',
    malus: 'spiritual'
  },
  debbieHarry: {
    label: 'The Muse',
    aesthetic: 'Edgy, Chic',
    flaw: 'Defines self through others',
    grailQuestion: 'Am I more than my image?',
    bonus: 'merciful',
    malus: 'modest'
  },
  freddieMercury: {
    label: 'The Icon',
    aesthetic: 'Regal, Theatrical',
    flaw: 'Glory masks insecurity',
    grailQuestion: 'Am I worthy of my legend?',
    bonus: 'energetic',
    malus: 'honest'
  },
  graceJones: {
    label: 'The Judge',
    aesthetic: 'Bold, Provocative',
    flaw: 'Sees flaws too clearly',
    grailQuestion: 'Am I justice or vengeance?',
    bonus: 'just',
    malus: 'merciful'
  },
  janisJoplin: {
    label: 'The Outcast',
    aesthetic: 'Raw, Flamboyant',
    flaw: 'Lonely despite charm',
    grailQuestion: 'Am I loved or just needed?',
    bonus: 'honest',
    malus: 'chaste'
  },
  jimSteinman: {
    label: 'The Romantic',
    aesthetic: 'Grandiose, Epic',
    flaw: 'Obsessed with ideal love',
    grailQuestion: 'Does love justify any price?',
    bonus: 'generous',
    malus: 'temperate'
  },
  joanJett: {
    label: 'The Rebel',
    aesthetic: 'Defiant, Punk',
    flaw: 'Conflicts with authority',
    grailQuestion: 'Can rebellion build anything lasting?',
    bonus: 'just',
    malus: 'forgiving'
  },
  kateBush: {
    label: 'The Dreamer',
    aesthetic: 'Haunting, Ethereal',
    flaw: 'Escapes into fantasy',
    grailQuestion: 'Is reality a dream?',
    bonus: 'forgiving',
    malus: 'trusting'
  },
  meatloaf: {
    label: 'The Lover',
    aesthetic: 'Tragic, Operatic',
    flaw: 'Yearns beyond reason',
    grailQuestion: 'What if love is not enough?',
    bonus: 'generous',
    malus: 'temperate'
  },
  patBenatar: {
    label: 'The Warrior',
    aesthetic: 'Fierce, Empowering',
    flaw: 'Lives for the fight',
    grailQuestion: 'Is peace just defeat?',
    bonus: 'temperate',
    malus: 'just'
  },
  prince: {
    label: 'The Enigma',
    aesthetic: 'Sensual, Mystical',
    flaw: 'Discomfort with intimacy',
    grailQuestion: 'Must I be everything to everyone?',
    bonus: 'prudent',
    malus: 'chaste'
  },
  robertSmith: {
    label: 'The Ghost',
    aesthetic: 'Melancholic, Romantic',
    flaw: 'Lost in nostalgia',
    grailQuestion: 'Am I remembered for the wrong things?',
    bonus: 'chaste',
    malus: 'energetic'
  },
  siouxsieSioux: {
    label: 'The Witch',
    aesthetic: 'Dark, Glamourous',
    flaw: 'Sees tomorrow, not today',
    grailQuestion: 'Can I change the future?',
    bonus: 'modest',
    malus: 'spiritual'
  },
  stevieNicks: {
    label: 'The Mystic',
    aesthetic: 'Mysterious, Lyrical',
    flaw: 'Haunted by visions',
    grailQuestion: 'Do I control my fate or does it control me?',
    bonus: 'spiritual',
    malus: 'modest'
  }
};
