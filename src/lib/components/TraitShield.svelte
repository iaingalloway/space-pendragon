<script lang="ts">
  import { traitShieldPath, traitShieldViewBox } from './traitShieldSvg';

  export let value: number | null;

  const isFamous = value !== null && value >= 16;
  const fill = isFamous ? 'black' : 'white';
  const textClass = isFamous ? ' text-white' : '';
</script>

<div class="relative h-14 w-11">
  <svg
    viewBox={traitShieldViewBox}
    class="h-14 w-12"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="black"
    stroke-width="4"
  >
    <path d={traitShieldPath} {fill} stroke="black" />
  </svg>

  <span
    class="absolute inset-0 flex items-center justify-center text-[1.1rem] pb-1 font-bold{textClass}"
  >
    {value ?? '\u00A0'}
  </span>
</div>
