<script lang="ts">
  import { labels } from '$lib/character.model.js';
  export let data;
</script>

<ul>
  <li>You take the form of a <strong>{data.label}</strong></li>
  <li>+2 <strong>{labels.traits[data.bonus].virtueLabel}</strong></li>
  <li>+2 <strong>{labels.traits[data.malus].viceLabel}</strong></li>
</ul>
