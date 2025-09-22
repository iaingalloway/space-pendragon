export const mechKeys = [
  'ghost',
  'child',
  'ancestor',
  'memory',
  'silence',
  'regret',
  'future',
  'applause',
  'mentor',
  'legend'
] as const;

export type MechKey = (typeof mechKeys)[number];

export interface MechDefinition {
  name: string;
  voice: string;
  combatStyle: string;
  quirk: string;
}

export const mechs: Record<MechKey, MechDefinition> = {
  ghost: {
    name: 'Wraith',
    voice: "A past lover's ghost",
    combatStyle: 'Graceful',
    quirk: "Won't strike first"
  },
  child: {
    name: 'Innocence',
    voice: 'Your childhood self',
    combatStyle: 'Erratic',
    quirk: 'Freezes when witnessing cruelty'
  },
  ancestor: {
    name: 'Justice',
    voice: "An ancestor's judgement",
    combatStyle: 'Precise',
    quirk: 'Refuses to retreat'
  },
  memory: {
    name: 'Peacebringer',
    voice: 'A memory you wish forgotten',
    combatStyle: 'Brutal',
    quirk: 'Loses control when pilot feels fear'
  },
  silence: {
    name: 'Whisper',
    voice: 'Silence (your voice only)',
    combatStyle: 'Beautiful',
    quirk: 'Broadcasts your true feelings'
  },
  regret: {
    name: 'Remorse',
    voice: 'Your greatest regret',
    combatStyle: 'Defiant',
    quirk: 'Seeks enemies that mirror your shame'
  },
  future: {
    name: 'Dawn',
    voice: 'A future you never reached',
    combatStyle: 'Relentless',
    quirk: 'Always moves towards strongest enemy'
  },
  applause: {
    name: 'Starfire',
    voice: 'Echoes of applause',
    combatStyle: 'Iconic',
    quirk: 'Requires audience to fight well'
  },
  mentor: {
    name: 'Guidance',
    voice: "A mentor's gentle scolding",
    combatStyle: 'Tactical',
    quirk: 'Immobilizes briefly after a kill'
  },
  legend: {
    name: 'Valor',
    voice: 'The voice of your own legend',
    combatStyle: 'Majestic',
    quirk: "Won't allow you to surrender"
  }
};
