<script lang="ts">
  import { FormKeys, Forms } from '$lib/forms';
</script>

<ul>
  {#each FormKeys as key (key)}
    <li><a href="/forms/{key}" target="_blank">{Forms[key].label}</a></li>
  {/each}
</ul>
