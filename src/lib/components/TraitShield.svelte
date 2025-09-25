<script lang="ts">
  import { traitShieldPath, traitShieldViewBox } from './traitShieldSvg';

  export let value: number | null;

  const isFamous = value !== null && value >= 16;
  const fill = isFamous ? 'black' : 'white';
  const textClass = isFamous ? ' text-white' : '';
</script>

<div class="relative h-10 w-8">
  <svg
    viewBox={traitShieldViewBox}
    class="h-10 w-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="black"
    stroke-width="4"
  >
    <path d={traitShieldPath} {fill} stroke="black" />
  </svg>

  <span
    class="absolute inset-0 flex items-center justify-center text-[1.1rem] font-bold{textClass}"
  >
    {value ?? ''}
  </span>
</div>
