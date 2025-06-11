<script lang="ts">
  import { formKeys, forms } from '$lib/forms';
</script>

<table class="table-hover table">
  <thead>
    <tr>
      <th>Form</th>
      <th>Aesthetic</th>
      <th>Instinct</th>
    </tr>
  </thead>
  <tbody>
    {#each formKeys as key (key)}
      <tr>
        <td><a href="/forms/{key}" target="_blank">{forms[key].label}</a></td>
        <td>{forms[key].aesthetic}</td>
        <td>{forms[key].instinct}</td>
      </tr>
    {/each}
  </tbody>
</table>
