<script lang="ts">
  import CharacterSheet from '$lib/components/CharacterSheet.svelte';
  export let data;
</script>

<CharacterSheet character={data.character} />
