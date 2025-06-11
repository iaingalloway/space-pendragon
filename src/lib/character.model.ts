import type { TraitKey, TraitDefinition } from './traits.types';
import type {
  PassionKey,
  PassionDefinition,
  NullablePassionEntry,
  NullableParameterisedPassionEntry,
  ParameterisedPassionKey
} from './passions.types';
import { parameterisedPassionKeys } from './passions.types';
import type { SkillKey, SkillDefinition } from './skills.types';

type Labels = {
  traits: Record<TraitKey, TraitDefinition>;
  passions: Record<PassionKey, PassionDefinition>;
  skills: Record<SkillKey, SkillDefinition>;
};

export const labels: Labels = {
  traits: {
    chaste: { virtueLabel: 'Chaste', viceLabel: 'Lustful' },
    energetic: { virtueLabel: 'Energetic', viceLabel: 'Lazy' },
    forgiving: { virtueLabel: 'Forgiving', viceLabel: 'Vengeful' },
    generous: { virtueLabel: 'Generous', viceLabel: 'Selfish' },
    honest: { virtueLabel: 'Honest', viceLabel: 'Deceitful' },
    just: { virtueLabel: 'Just', viceLabel: 'Arbitrary' },
    merciful: { virtueLabel: 'Merciful', viceLabel: 'Cruel' },
    modest: { virtueLabel: 'Modest', viceLabel: 'Proud' },
    prudent: { virtueLabel: 'Prudent', viceLabel: 'Reckless' },
    spiritual: { virtueLabel: 'Spiritual', viceLabel: 'Worldly' },
    temperate: { virtueLabel: 'Temperate', viceLabel: 'Indulgent' },
    trusting: { virtueLabel: 'Trusting', viceLabel: 'Suspicious' },
    valorous: { virtueLabel: 'Valorous', viceLabel: 'Cowardly' }
  },

  passions: {
    honour: { label: 'Honour' },
    loyalty: { label: 'Loyalty' },
    hospitality: { label: 'Hospitality' },
    love: { label: 'Love' },
    hate: { label: 'Hate' }
  },

  skills: {
    awareness: { label: 'Awareness' },
    compose: { label: 'Compose' },
    courtesy: { label: 'Courtesy' },
    dancing: { label: 'Dancing' },
    falconry: { label: 'Falconry' },
    fashion: { label: 'Fashion' },
    firstAid: { label: 'First Aid' },
    flirting: { label: 'Flirting' },
    folklore: { label: 'Folklore' },
    gaming: { label: 'Gaming' },
    hunting: { label: 'Hunting' },
    intrigue: { label: 'Intrigue' },
    literacy: { label: 'Literacy' },
    orate: { label: 'Orate' },
    playInstrument: { label: 'Play Instrument' },
    recognise: { label: 'Recognise' },
    sing: { label: 'Sing' },
    stewardship: { label: 'Stewardship' },
    battle: { label: 'Battle' },
    piloting: { label: 'Piloting' },
    sword: { label: 'Sword' },
    laserLance: { label: 'Laser Lance' }
  }
};

export function isParameterisedPassionEntry(
  entry: NullablePassionEntry
): entry is NullableParameterisedPassionEntry {
  return parameterisedPassionKeys.includes(entry.key as ParameterisedPassionKey);
}

export function getPassionKey(passion: NullablePassionEntry): string {
  return isParameterisedPassionEntry(passion)
    ? `${passion.key}:${passion.parameter}`
    : `${passion.key}:`;
}
