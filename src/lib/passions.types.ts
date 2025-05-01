export const parameterlessPassionKeys = ['honour', 'hospitality'] as const;
export const parameterisedPassionKeys = ['loyalty', 'love', 'hate'] as const;
export type ParamaterlessPassionKey = (typeof parameterlessPassionKeys)[number];
export type ParameterisedPassionKey = (typeof parameterisedPassionKeys)[number];
export type PassionKey = ParamaterlessPassionKey | ParameterisedPassionKey;

export interface PassionDefinition {
  label: string;
}

export interface ParameterlessPassionEntry {
  key: ParamaterlessPassionKey;
  value: number;
  checked?: boolean;
}
export interface ParameterisedPassionEntry {
  key: ParameterisedPassionKey;
  value: number;
  checked?: boolean;
  parameter: string;
}
export type PassionEntry = ParameterlessPassionEntry | ParameterisedPassionEntry;

export interface NullableParameterlessPassionEntry {
  key: ParamaterlessPassionKey | null;
  value: number | null;
  checked?: boolean;
}
export interface NullableParameterisedPassionEntry {
  key: ParameterisedPassionKey;
  value: number | null;
  checked?: boolean;
  parameter: string;
}
export type NullablePassionEntry =
  | NullableParameterlessPassionEntry
  | NullableParameterisedPassionEntry;
