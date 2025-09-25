/**
 * Utility functions and constants for the Space Pendragon application
 */

/**
 * Validates if a value is within the expected range for RPG stats
 * @param value - The value to validate
 * @param min - Minimum allowed value (default: 0)
 * @param max - Maximum allowed value (default: 20)
 * @returns boolean indicating if value is valid
 */
export function isValidStatValue(value: number | null | undefined, min = 0, max = 20): boolean {
  if (value === null || value === undefined) return false;
  return value >= min && value <= max && Number.isInteger(value);
}

/**
 * Safely converts a string to a number, returning null if invalid
 * @param value - String to convert
 * @returns Number or null
 */
export function safeNumberConversion(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === '') return null;
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

/**
 * Clamps a value between min and max bounds
 * @param value - Value to clamp
 * @param min - Minimum bound
 * @param max - Maximum bound
 * @returns Clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Formats a parameter string for display (capitalizes first letter)
 * @param parameter - Parameter string to format
 * @returns Formatted string
 */
export function formatParameter(parameter: string): string {
  return parameter.charAt(0).toUpperCase() + parameter.slice(1).toLowerCase();
}

/**
 * Generates a unique key for list items that might not have stable IDs
 * @param prefix - Prefix for the key
 * @param index - Index in the list
 * @returns Unique key string
 */
export function generateListKey(prefix: string, index: number): string {
  return `${prefix}-${index}`;
}

/**
 * Debounces a function call to avoid excessive execution
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Constants for the application
 */
export const appConstants = {
  STAT_MIN: 0,
  STAT_MAX: 20,
  DEFAULT_STAT_VALUE: 10,
  GLORY_MIN: 0,
  GLORY_MAX: 99999,
  DEBOUNCE_DELAY: 300
} as const;

/**
 * Error messages
 */
export const errorMessages = {
  INVALID_STAT_VALUE: 'Stat value must be between 0 and 20',
  INVALID_GLORY_VALUE: 'Glory must be a positive number',
  REQUIRED_FIELD: 'This field is required',
  GENERIC_ERROR: 'An unexpected error occurred',
  DATA_LOAD_ERROR: 'Failed to load data'
} as const;

/**
 * ARIA labels for accessibility
 */
export const ariaLabels = {
  CHARACTER_SHEET: 'Character sheet interface',
  TRAIT_VALUE: 'Trait value',
  VIRTUE_CHECKBOX: 'Virtue trait checked',
  VICE_CHECKBOX: 'Vice trait checked',
  PASSION_CHECKBOX: 'Passion checked',
  SKILL_CHECKBOX: 'Skill checked',
  NAVIGATION: 'Main navigation',
  ERROR_DETAILS: 'Error details',
  LOADING: 'Loading content'
} as const;
