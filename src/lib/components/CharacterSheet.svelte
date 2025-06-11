<script lang="ts">
  import TraitShield from '$lib/components/TraitShield.svelte';
  import { type CharacterViewModel } from '$lib/character.types';
  import { traitKeys } from '$lib/traits.types';
  import { combatSkillKeys, nonCombatSkillKeys } from '$lib/skills.types';
  import { isParameterisedPassionEntry, labels } from '$lib/character.model';

  export let character: CharacterViewModel;
</script>

<div class="section-container p-6 print:p-4">
  <h1 class="heading-xl print:heading-lg">Pendragon</h1>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 print:grid-cols-2">
    <span><strong>Name:</strong> {character.name}</span>
    <span><strong>Glory:</strong> {character.glory}</span>
  </div>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 print:grid-cols-2">
    <section id="traits">
      <h2 class="heading-lg print:heading-md mb-2">Traits</h2>
      <ul class="space-y-2 text-sm print:text-xs">
        {#each traitKeys as key (key)}
          <li class="border-outline flex items-center justify-between border-b py-1 last:border-0">
            <span class="flex items-center gap-2">
              <TraitShield value={character.traits[key].value} />
              <input
                type="checkbox"
                bind:checked={character.traits[key].virtueChecked}
                class="checkbox"
                aria-label={`${labels.traits[key].virtueLabel} is checked`}
              />
              {labels.traits[key].virtueLabel}
            </span>

            <span class="flex items-center gap-2">
              {labels.traits[key].viceLabel}
              <input
                type="checkbox"
                bind:checked={character.traits[key].viceChecked}
                class="checkbox"
                aria-label={`${labels.traits[key].viceLabel} is checked`}
              />
              <TraitShield
                value={character.traits[key].value == undefined
                  ? null
                  : 20 - character.traits[key].value}
              />
            </span>
          </li>
        {/each}
      </ul>
    </section>

    <div class="flex flex-col gap-6">
      <section id="passions">
        <h2 class="heading-lg print:heading-md mb-2">Passions</h2>
        <ul class="space-y-2 text-sm print:text-xs">
          {#each character.passions as passion, i (i)}
            <li
              class="border-outline flex items-center justify-between border-b py-1 last:border-0"
            >
              <span class="flex items-center gap-2">
                <input
                  type="checkbox"
                  bind:checked={passion.checked}
                  class="checkbox"
                  aria-label={`${passion.key == null ? 'passion' : labels.passions[passion.key].label}${isParameterisedPassionEntry(passion) ? ` (${passion.parameter})` : ''} is checked`}
                />
                {passion.key == null ? '' : labels.passions[passion.key].label}
                {#if isParameterisedPassionEntry(passion)}
                  <em>({passion.parameter})</em>
                {/if}
              </span>
              <span class="value tabular-nums">{passion.value}</span>
            </li>
          {/each}
        </ul>
      </section>

      <section id="skills">
        <h2 class="heading-lg print:heading-md mb-2">Skills</h2>

        <section id="non-combat-skills">
          <h3 class="heading-md print:heading-sm mb-2">Non-Combat</h3>
          <ul
            class="grid grid-cols-1 space-y-2 text-sm md:grid-cols-2 print:grid-cols-2 print:text-xs"
          >
            {#each nonCombatSkillKeys as key (key)}
              <li class="border-outline m-1 flex items-center justify-between border-b py-1">
                <span class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    bind:checked={character.skills[key].checked}
                    class="checkbox"
                    aria-label={`${labels.skills[key].label} is checked`}
                  />
                  {labels.skills[key].label}
                </span>
                <span class="value tabular-nums">{character.skills[key].value}</span>
              </li>
            {/each}
          </ul>
        </section>

        <section id="combat-skills">
          <h3 class="heading-md print:heading-sm mb-2">Combat</h3>
          <ul
            class="grid grid-cols-1 space-y-2 text-sm md:grid-cols-2 print:grid-cols-2 print:text-xs"
          >
            {#each combatSkillKeys as key (key)}
              <li class="border-outline m-1 flex items-center justify-between border-b py-1">
                <span class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    bind:checked={character.skills[key].checked}
                    class="checkbox"
                    aria-label={`${labels.skills[key].label} is checked`}
                  />
                  {labels.skills[key].label}
                </span>
                <span class="value tabular-nums">{character.skills[key].value}</span>
              </li>
            {/each}
          </ul>
        </section>
      </section>
    </div>
  </div>
</div>
