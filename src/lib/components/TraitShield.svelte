<script lang="ts">
  import { traitShieldPath, traitShieldViewBox } from './traitShieldSvg';

  export let value: number | null;

  const isFamous = value !== null && value >= 16;
</script>

<div class="relative h-14 w-11">
  <svg
    viewBox={traitShieldViewBox}
    class:famous={isFamous}
    class="trait-shield h-14 w-12"
    xmlns="http://www.w3.org/2000/svg"
    stroke-width="4"
  >
    <path d={traitShieldPath} />
  </svg>

  <span
    class:famous={isFamous}
    class="trait-shield-value absolute inset-0 flex items-center justify-center pb-1 text-[1.1rem] font-bold"
  >
    {value ?? '\u00A0'}
  </span>
</div>
