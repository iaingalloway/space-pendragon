export const parameterlessPassionKeys = ['honour', 'hospitality'] as const;
export const parameterisedPassionKeys = ['loyalty', 'love', 'hate'] as const;
export type ParamaterlessPassionKey = (typeof parameterlessPassionKeys)[number];
export type ParameterisedPassionKey = (typeof parameterisedPassionKeys)[number];
export type PassionKey = ParamaterlessPassionKey | ParameterisedPassionKey;

export type PassionDefinition = {
  label: string;
};

export type ParameterlessPassionEntry = {
  key: ParamaterlessPassionKey;
  value: number;
  checked?: boolean;
};
export type ParameterisedPassionEntry = {
  key: ParameterisedPassionKey;
  value: number;
  checked?: boolean;
  parameter: string;
};
export type PassionEntry = ParameterlessPassionEntry | ParameterisedPassionEntry;

export type NullableParameterlessPassionEntry = {
  key: ParamaterlessPassionKey | null;
  value: number | null;
  checked?: boolean;
};
export type NullableParameterisedPassionEntry = {
  key: ParameterisedPassionKey;
  value: number | null;
  checked?: boolean;
  parameter: string;
};
export type NullablePassionEntry =
  | NullableParameterlessPassionEntry
  | NullableParameterisedPassionEntry;
