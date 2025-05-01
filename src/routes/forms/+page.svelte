<script lang="ts">
  import { formKeys, forms } from '$lib/forms';
</script>

<ul>
  {#each formKeys as key (key)}
    <li><a href="/forms/{key}" target="_blank">{forms[key].label}</a></li>
  {/each}
</ul>
