<script lang="ts">
  import { legendKeys, legends } from '$lib/legends';
  import { labels } from '$lib/character.model.js';
</script>

<h1 class="h1">Legends</h1>

<table class="table-hover table">
  <thead>
    <tr>
      <th>Legend</th>
      <th>Aesthetic</th>
      <th>Flaw</th>
      <th>Grail Question</th>
      <th>Bonus</th>
      <th>Malus</th>
    </tr>
  </thead>
  <tbody>
    {#each legendKeys as key (key)}
      <tr>
        <td><a href="/legends/{key}" target="_blank">{legends[key].label}</a></td>
        <td>{legends[key].aesthetic}</td>
        <td>{legends[key].flaw}</td>
        <td>{legends[key].grailQuestion}</td>
        <td>{labels.traits[legends[key].bonus].virtueLabel}</td>
        <td>{labels.traits[legends[key].malus].viceLabel}</td>
      </tr>
    {/each}
  </tbody>
</table>
