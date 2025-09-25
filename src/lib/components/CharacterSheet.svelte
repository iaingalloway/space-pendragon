<script lang="ts">
  import TraitShield from '$lib/components/TraitShield.svelte';
  import ErrorBoundary from '$lib/components/ErrorBoundary.svelte';
  import { type CharacterViewModel } from '$lib/character.types';
  import { traitKeys } from '$lib/traits.types';
  import { isParameterisedPassionEntry, labels } from '$lib/character.model';
  import { ariaLabels, formatParameter } from '$lib/utils';

  interface Props {
    character: CharacterViewModel;
  }

  let { character }: Props = $props();

  // Reactive computations for better performance
  const hasNonCombatSkills = $derived(
    character.nonCombatSkills && character.nonCombatSkills.length > 0
  );
  const hasCombatSkills = $derived(character.combatSkills && character.combatSkills.length > 0);
  const hasPassions = $derived(character.passions && character.passions.length > 0);
</script>

<ErrorBoundary>
  <div class="character-sheet p-6" role="main" aria-label={ariaLabels.CHARACTER_SHEET}>
    <header class="mb-8">
      <h1 class="text-surface-900-50-token mb-4 text-3xl font-bold">Pendragon</h1>

      <div class="character-info grid grid-cols-1 gap-4 md:grid-cols-5 print:grid-cols-5">
        <div class="col-span-3">
          <span class="block">
            <span class="font-semibold">Name:</span>
            <span class="ml-2">{character.name || 'Unnamed Character'}</span>
          </span>
        </div>
        <div class="col-span-2">
          <span class="block">
            <span class="font-semibold">Glory:</span>
            <span class="ml-2">{character.glory ?? 'Not set'}</span>
          </span>
        </div>
      </div>
    </header>

    <div class="character-content grid grid-cols-1 gap-8 md:grid-cols-5 print:grid-cols-5">
      <!-- Traits Section -->
      <section id="traits" class="col-span-3" aria-labelledby="traits-heading">
        <h2 id="traits-heading" class="text-surface-800-100-token mb-4 text-2xl font-semibold">
          Traits
        </h2>
        <div class="traits-list space-y-2 text-sm">
          {#each traitKeys as key (key)}
            {@const trait = character.traits[key]}
            {@const traitDef = labels.traits[key]}
            {#if trait && traitDef}
              <div
                class="trait-row border-surface-200-700-token flex items-center justify-between border-b py-3 last:border-0"
                role="group"
                aria-label="Trait: {traitDef.virtueLabel} vs {traitDef.viceLabel}"
              >
                <!-- Virtue side -->
                <div class="virtue-side flex items-center gap-3">
                  <TraitShield
                    value={trait.value}
                    ariaLabel="Virtue value for {traitDef.virtueLabel}"
                  />
                  <label class="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      bind:checked={trait.virtueChecked}
                      class="checkbox"
                      aria-describedby="trait-{key}-virtue-desc"
                    />
                    <span id="trait-{key}-virtue-desc" class="select-none">
                      {traitDef.virtueLabel}
                    </span>
                  </label>
                </div>

                <!-- Vice side -->
                <div class="vice-side flex items-center gap-3">
                  <label class="flex cursor-pointer items-center gap-2">
                    <span id="trait-{key}-vice-desc" class="select-none">
                      {traitDef.viceLabel}
                    </span>
                    <input
                      type="checkbox"
                      bind:checked={trait.viceChecked}
                      class="checkbox"
                      aria-describedby="trait-{key}-vice-desc"
                    />
                  </label>
                  <TraitShield
                    value={trait.value === null ? null : 20 - trait.value}
                    ariaLabel="Vice value for {traitDef.viceLabel}"
                  />
                </div>
              </div>
            {/if}
          {/each}
        </div>
      </section>

      <!-- Passions and Skills Section -->
      <div class="col-span-2 flex flex-col gap-6">
        <!-- Passions Section -->
        {#if hasPassions}
          <section id="passions" aria-labelledby="passions-heading">
            <h2
              id="passions-heading"
              class="text-surface-800-100-token mb-4 text-2xl font-semibold"
            >
              Passions
            </h2>
            <div class="passions-list space-y-2 text-sm">
              {#each character.passions as passion, i (passion.key ? `${passion.key}-${i}` : `passion-${i}`)}
                {#if passion.key && labels.passions[passion.key]}
                  {@const passionDef = labels.passions[passion.key]}
                  <div
                    class="passion-row border-surface-200-700-token flex items-center justify-between border-b py-2 last:border-0"
                    role="group"
                    aria-label="Passion: {passionDef.label}{isParameterisedPassionEntry(passion)
                      ? ` (${formatParameter(passion.parameter)})`
                      : ''}"
                  >
                    <div class="passion-info flex items-center gap-2">
                      <label class="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          bind:checked={passion.checked}
                          class="checkbox"
                          aria-describedby="passion-{i}-desc"
                        />
                        <span id="passion-{i}-desc" class="select-none">
                          {passionDef.label}
                          {#if isParameterisedPassionEntry(passion)}
                            <em class="text-surface-500-400-token">
                              ({formatParameter(passion.parameter)})
                            </em>
                          {/if}
                        </span>
                      </label>
                    </div>
                    <span class="passion-value font-medium tabular-nums">
                      {passion.value ?? '—'}
                    </span>
                  </div>
                {/if}
              {/each}
            </div>
          </section>
        {/if}

        <!-- Skills Section -->
        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading" class="text-surface-800-100-token mb-4 text-2xl font-semibold">
            Skills
          </h2>

          <div class="skills-container flex flex-col gap-6">
            <!-- Non-Combat Skills -->
            {#if hasNonCombatSkills}
              <div id="non-combat-skills" aria-labelledby="non-combat-skills-heading">
                <h3
                  id="non-combat-skills-heading"
                  class="text-surface-700-200-token mb-3 text-lg font-medium"
                >
                  Non-Combat
                </h3>
                <div class="skills-list space-y-2 text-sm">
                  {#each character.nonCombatSkills as skill, i (skill.key ? `${skill.key}-${i}` : `non-combat-skill-${i}`)}
                    {#if skill.key && labels.skills[skill.key]}
                      {@const skillDef = labels.skills[skill.key]}
                      <div
                        class="skill-row border-surface-200-700-token flex items-center justify-between border-b py-2 last:border-0"
                        role="group"
                        aria-label="Non-combat skill: {skillDef.label}"
                      >
                        <div class="skill-info">
                          <label class="flex cursor-pointer items-center gap-2">
                            <input
                              type="checkbox"
                              bind:checked={skill.checked}
                              class="checkbox"
                              aria-describedby="non-combat-skill-{i}-desc"
                            />
                            <span id="non-combat-skill-{i}-desc" class="select-none">
                              {skillDef.label}
                            </span>
                          </label>
                        </div>
                        <span class="skill-value font-medium tabular-nums">
                          {skill.value ?? '—'}
                        </span>
                      </div>
                    {/if}
                  {/each}
                </div>
              </div>
            {/if}

            <!-- Combat Skills -->
            {#if hasCombatSkills}
              <div id="combat-skills" aria-labelledby="combat-skills-heading">
                <h3
                  id="combat-skills-heading"
                  class="text-surface-700-200-token mb-3 text-lg font-medium"
                >
                  Combat
                </h3>
                <div class="skills-list space-y-2 text-sm">
                  {#each character.combatSkills as skill, i (skill.key ? `${skill.key}-${i}` : `combat-skill-${i}`)}
                    {#if skill.key && labels.skills[skill.key]}
                      {@const skillDef = labels.skills[skill.key]}
                      <div
                        class="skill-row border-surface-200-700-token flex items-center justify-between border-b py-2 last:border-0"
                        role="group"
                        aria-label="Combat skill: {skillDef.label}"
                      >
                        <div class="skill-info">
                          <label class="flex cursor-pointer items-center gap-2">
                            <input
                              type="checkbox"
                              bind:checked={skill.checked}
                              class="checkbox"
                              aria-describedby="combat-skill-{i}-desc"
                            />
                            <span id="combat-skill-{i}-desc" class="select-none">
                              {skillDef.label}
                            </span>
                          </label>
                        </div>
                        <span class="skill-value font-medium tabular-nums">
                          {skill.value ?? '—'}
                        </span>
                      </div>
                    {/if}
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </section>
      </div>
    </div>
  </div>
</ErrorBoundary>

<style>
  /* Print styles */
  @media print {
    :global(.character-sheet) {
      padding: 1rem;
    }

    .trait-row,
    .passion-row,
    .skill-row {
      break-inside: avoid;
    }
  }

  /* Improve readability in high contrast mode */
  @media (prefers-contrast: high) {
    .trait-row,
    .passion-row,
    .skill-row {
      border-width: 2px;
    }
  }

  /* Focus indicators for better keyboard navigation */
  :global(.checkbox:focus-visible) {
    outline: 2px solid rgb(var(--color-primary-500));
    outline-offset: 2px;
  }

  :global(label:focus-within) {
    outline: 1px dashed rgb(var(--color-primary-400));
    outline-offset: 2px;
  }
</style>
