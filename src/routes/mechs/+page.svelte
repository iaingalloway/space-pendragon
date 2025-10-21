<script lang="ts">
  import { mechKeys, mechs } from '$lib/mechs';
</script>

<h1 class="h1">Frames</h1>

<table class="table-hover table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Voice</th>
      <th>Combat Style</th>
      <th>Quirk</th>
    </tr>
  </thead>
  <tbody>
    {#each mechKeys as key (key)}
      <tr>
        <td><a href="/mechs/{key}" target="_blank">{mechs[key].name}</a></td>
        <td>{mechs[key].voice}</td>
        <td>{mechs[key].combatStyle}</td>
        <td>{mechs[key].quirk}</td>
      </tr>
    {/each}
  </tbody>
</table>
