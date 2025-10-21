<script lang="ts">
  import { formKeys, forms } from '$lib/forms';
  import { labels } from '$lib/character.model.js';
</script>

<h1 class="h1">Forms</h1>

<table class="table-hover table">
  <thead>
    <tr>
      <th>Form</th>
      <th>Aesthetic</th>
      <th>Instinct</th>
      <th>Bonus</th>
      <th>Malus</th>
    </tr>
  </thead>
  <tbody>
    {#each formKeys as key (key)}
      <tr>
        <td><a href="/forms/{key}" target="_blank">{forms[key].label}</a></td>
        <td>{forms[key].aesthetic}</td>
        <td>{forms[key].instinct}</td>
        <td>{labels.traits[forms[key].bonus].virtueLabel}</td>
        <td>{labels.traits[forms[key].malus].viceLabel}</td>
      </tr>
    {/each}
  </tbody>
</table>
