<script lang="ts">
  import { traitShieldPath, traitShieldViewBox } from './traitShieldSvg';
  import { isValidStatValue, ariaLabels } from '$lib/utils';

  interface Props {
    value: number | null;
    size?: 'sm' | 'md' | 'lg';
    ariaLabel?: string;
  }

  let { value, size = 'md', ariaLabel }: Props = $props();

  const sizeClasses = {
    sm: 'h-8 w-6',
    md: 'h-10 w-8',
    lg: 'h-12 w-10'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-[1.1rem]',
    lg: 'text-xl'
  };

  // Determine if this is a "notable" trait (16+ or 4-)
  const isNotable = $derived(value !== null && (value >= 16 || value <= 4));
  const isValid = $derived(isValidStatValue(value));
  const displayValue = $derived(isValid ? value : '');
  const fillColor = $derived(isNotable ? 'black' : 'white');
  const textColor = $derived(isNotable ? 'text-white' : 'text-black');
</script>

<div
  class="trait-shield relative {sizeClasses[size]}"
  role="img"
  aria-label={ariaLabel || `${ariaLabels.TRAIT_VALUE}: ${displayValue || 'empty'}`}
>
  <svg
    viewBox={traitShieldViewBox}
    class={sizeClasses[size]}
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="black"
    stroke-width="4"
    aria-hidden="true"
  >
    <path d={traitShieldPath} fill={fillColor} stroke="black" />
  </svg>

  <span
    class="absolute inset-0 flex items-center justify-center {textSizeClasses[
      size
    ]} font-bold {textColor}"
    aria-hidden="true"
  >
    {displayValue}
  </span>
</div>

<style>
  .trait-shield {
    /* Ensure consistent rendering across browsers */
    flex-shrink: 0;
    display: inline-block;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .trait-shield svg {
      stroke-width: 6;
    }
  }

  /* Print styles */
  @media print {
    .trait-shield svg {
      stroke-width: 2;
    }
  }
</style>
