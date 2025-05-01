<script lang="ts">
  import { LegendKeys, Legends } from '$lib/legends';
</script>

<ul>
  {#each LegendKeys as key (key)}
    <li><a href="/legends/{key}" target="_blank">{Legends[key].label}</a></li>
  {/each}
</ul>
