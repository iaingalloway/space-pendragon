<script lang="ts">
  import TraitShield from '$lib/components/TraitShield.svelte';
  import { type CharacterViewModel } from '$lib/character.types';
  import { traitKeys } from '$lib/traits.types';
  import { isParameterisedPassionEntry, labels } from '$lib/character.model';
  import { forms } from '$lib/forms';

  export let character: CharacterViewModel;

  $: form = character.form ? forms[character.form] : undefined;
</script>

<h1 class="h1 float-left">Pendragon</h1>
<blockquote class="text-l float-left px-4 pt-10 block"><strong>Serve</strong> your lord; <strong>Defend</strong> the weak; <strong>Seek Glory</strong> among the stars</blockquote>

<div class="grid grid-cols-1 gap-8 md:grid-cols-5 print:grid-cols-5 clear-both">
  <div class="col-span-3">
    <div><strong>Name:</strong> {character.name}</div>
    <div><strong>Legend:</strong> {character.legend}</div>
    <div><strong>Flaw:</strong> {character.flaw}</div>
    <div><strong>Grail Question:</strong> {character.grailQuestion}</div>
  </div>

  <div class="col-span-2">
    <div><strong>Glory:</strong> {character.glory}</div>
    <div><strong>Form:</strong> {form?.label}</div>
    <div><strong>Instinct:</strong> {form?.instinct}</div>
    <div><strong>Aesthetic:</strong> {character.aesthetic}</div>
  </div>
</div>

{#if character.houseWords}
  <div class="grid grid-cols-1 gap-8 md:grid-cols-5 print:grid-cols-5">
    <span class="col-span-5">
      <strong>House Words:</strong> <em>"{character.houseWords}"</em>
    </span>
  </div>
{/if}

<div class="grid grid-cols-1 gap-8 md:grid-cols-5 print:grid-cols-5">
  <section id="traits" class="col-span-3">
    <h2 class="h2 float-left">Traits</h2>
    <blockquote class="text-sm float-left px-4 pt-8 block">Make a <strong>free choice</strong>; Roll one trait <strong>unopposed</strong>; Roll two traits <strong>opposed</strong></blockquote>

    <ul class="text-xl clear-both">
      {#each traitKeys as key (key)}
        <li class="border-outline flex items-center justify-between border-b last:border-0">
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

  <div class="col-span-2 flex flex-col gap-2">
    <section id="passions">
      <h2 class="h2 float-left">Passions</h2>
      <blockquote class="text-sm float-left px-4 pt-8 block">Become <strong>Inspired</strong></blockquote>

      <ul class="clear-both">
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
              {passion.key == null ? '\u00A0' : labels.passions[passion.key].label}
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
      <h2 class="h2 float-left">Skills</h2>
      <blockquote class="text-sm float-left px-4 pt-8 block">Roll less than value for <strong>Success</strong>, equal for a <strong>Critical</strong></blockquote>

      <div class="flex flex-col clear-both">
        {#if character.courtlySkills.length > 0}
          <section id="courtly-skills">
            <h3 class="h3">Courtly</h3>
            <ul>
              {#each character.courtlySkills as skill, i (i)}
                <li
                  class="border-outline flex items-center justify-between border-b py-1 last:border-0"
                >
                  <span class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      bind:checked={skill.checked}
                      class="checkbox"
                      aria-label={`${skill.key == null ? 'skill' : labels.skills[skill.key].label} is checked`}
                    />
                    {skill.key == null ? '\u00A0' : labels.skills[skill.key].label}
                  </span>
                  <span class="value tabular-nums">{skill.value}</span>
                </li>
              {/each}
            </ul>
          </section>
        {/if}

        {#if character.martialSkills.length > 0}
          <section id="martial">
            <h3 class="h3">Martial</h3>
            <ul>
              {#each character.martialSkills as skill, i (i)}
                <li
                  class="border-outline flex items-center justify-between border-b py-1 last:border-0"
                >
                  <span class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      bind:checked={skill.checked}
                      class="checkbox"
                      aria-label={`${skill.key == null ? 'skill' : labels.skills[skill.key].label} is checked`}
                    />
                    {skill.key == null ? '\u00A0' : labels.skills[skill.key].label}
                  </span>
                  <span class="value tabular-nums">{skill.value}</span>
                </li>
              {/each}
            </ul>
          </section>
        {/if}
      </div>
    </section>
  </div>
</div>
