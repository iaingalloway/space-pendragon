<script lang="ts">
  export let value: number | null;

  const xBox = 80;
  const yBox = 100;

  const xCentre = 40;
  const yOutsideOffset = 5;
  const xShoulderOffset = 5;
  const yShoulderOffset = 10;

  const xCheek = 5;
  const yCheek = 66;
  const xJaw = 5;
  const yJaw = 15;
</script>

<div class="relative h-10 w-8">
  <svg
    viewBox="0 0 {xBox} {yBox}"
    class="h-10 w-8"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    stroke="black"
    stroke-width="4"
  >
    <path
      d="M {xCentre} {yOutsideOffset}
         L {xBox - xShoulderOffset} {yShoulderOffset}
         C {xBox - xJaw} {yBox - yJaw} {xBox - xCheek} {yCheek} {xCentre} {yBox - yOutsideOffset}
         C {xCheek} {yCheek} {xJaw} {yBox - yJaw} {xShoulderOffset} {yShoulderOffset}
         Z"
      fill="white"
      stroke="black"
    />
  </svg>

  <span class="absolute inset-0 flex items-center justify-center text-[1.1rem] font-bold">
    {value ?? ''}
  </span>
</div>
