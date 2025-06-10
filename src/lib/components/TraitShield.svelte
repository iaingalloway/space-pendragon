<script lang="ts">
  import { TRAIT_SHIELD_PATH, TRAIT_SHIELD_VIEWBOX } from './trait-shield-svg';

  export let value: number | null;
</script>

<div class="relative h-10 w-8">
  <svg
    viewBox={TRAIT_SHIELD_VIEWBOX}
    class="h-10 w-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="black"
    stroke-width="4"
  >
    <path d={TRAIT_SHIELD_PATH} fill="white" stroke="black" />
  </svg>

  <span class="absolute inset-0 flex items-center justify-center text-[1.1rem] font-bold">
    {value ?? ''}
  </span>
</div>
