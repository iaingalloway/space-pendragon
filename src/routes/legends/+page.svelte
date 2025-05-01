<script lang="ts">
  import { legendKeys, legends } from '$lib/legends';
</script>

<ul>
  {#each legendKeys as key (key)}
    <li><a href="/legends/{key}" target="_blank">{legends[key].label}</a></li>
  {/each}
</ul>
