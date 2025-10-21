<script lang="ts">
  import { traitShieldPath, traitShieldViewBox } from '$lib/components/traitShieldSvg';
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-3 print:grid-cols-3">
  <div class="col-span-1">
    <h1 class="h1">History</h1>
  </div>
  <div class="col-span-1">
    <div><strong>Family:</strong></div>
    <div><strong>Homeworld:</strong></div>
    <div><strong>Fief:</strong></div>
    <div><strong>House Words:</strong></div>
  </div>
  <div class="absolute top-0 right-0 z-2">
    <svg
      viewBox={traitShieldViewBox}
      class="h-96 w-80"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      stroke="black"
      stroke-width="4"
    >
      <path d={traitShieldPath} fill="white" stroke="black" />
    </svg>
  </div>
</div>

<table class="table-hover table table-fixed">
  <thead>
    <tr>
      <th class="w-32">Year</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {#each Array(34) as _, i}
      <tr id="year-{i + 1}">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    {/each}
  </tbody>
</table>
