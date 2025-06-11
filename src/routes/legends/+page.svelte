<script lang="ts">
  import { legendKeys, legends } from '$lib/legends';
</script>

<table class="table-hover table">
  <thead>
    <tr>
      <th>Legend</th>
      <th>Aesthetic</th>
      <th>Flaw</th>
      <th>Grail Question</th>
    </tr>
  </thead>
  <tbody>
    {#each legendKeys as key (key)}
      <tr>
        <td><a href="/legends/{key}" target="_blank">{legends[key].label}</a></td>
        <td>{legends[key].aesthetic}</td>
        <td>{legends[key].flaw}</td>
        <td>{legends[key].grailQuestion}</td>
      </tr>
    {/each}
  </tbody>
</table>
