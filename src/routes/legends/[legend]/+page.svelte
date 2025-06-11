<script lang="ts">
  import { labels } from '$lib/character.model.js';
  export let data;
</script>

<ul>
  <li>You are <strong>{data.label}</strong></li>
  <li>Aesthetic: <strong>{data.aesthetic}</strong></li>
  <li>Flaw: <strong>{data.flaw}</strong></li>
  <li>Grail Question: <strong>{data.grailQuestion}</strong></li>
  <li>+2 <strong>{labels.traits[data.bonus].virtueLabel}</strong></li>
  <li>+2 <strong>{labels.traits[data.malus].viceLabel}</strong></li>
</ul>
