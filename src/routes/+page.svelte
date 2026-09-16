<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="h1 glitch-text"><span class="glitch-text__content">Welcome to Space Pendragon</span><span class="glitch-text__slice" aria-hidden="true">Welcome to Space Pendragon</span></h1>

<section>
  <h2 class="glitch-text"><span class="glitch-text__content">The Court of Logres</span><span class="glitch-text__slice" aria-hidden="true">The Court of Logres</span></h2>

  <ul class="list-disc list-inside p-4">
    <li>King Uther Pendragon (Lion)
      <ul class="list-disc list-inside px-4">
        <li><a href="/characters/arfius" target="_blank">Marshal Arfius, Duke of Silchester (Dog)</a></li>
        <li><a href="/characters/baastias" target="_blank">Sir Baastias, Uther's Bodyguard (Sheep)</a></li>
        <li><a href="/characters/madoc" target="_blank">Prince Madoc (Lion)</a></li>
        <li>Gorlois, Duke of Cornwall (Wildcat)</li>
        <li>Lady Ygraine (Swan)</li>
        <li>Eadric, Duke of Lindsey (Wolf)</li>
        <li><a href="/characters/salisbury/roderick" target="_blank">Roderick, Earl of Sarum (Bear)</a>
          <ul class="list-disc list-inside px-4">
            <li>Ellen, Countess of Sarum</li>
            <li>Jensen, the Earl's son (Bear)</li>
            <li><a href="/characters/salisbury/elad" target="_blank">Elad, Marshal of Sarum (Badger)</a></li>
            <li>Our Radiant Protagonists:
              <ul class="list-disc list-inside px-4">
                {#each data.playerKnights as playerKnight (playerKnight.slug)}
                  <li>
                    <a href="/characters/salisbury/player-knights/{playerKnight.slug}" target="_blank">
                      {playerKnight.name} ({playerKnight.form}) - {playerKnight.glory} Glory
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</section>

<section>
  <h2 class="glitch-text"><span class="glitch-text__content">Sheets</span><span class="glitch-text__slice" aria-hidden="true">Sheets</span></h2>

  <ul class="list-disc list-inside p-4">
    <li><a href="/characters" target="_blank">Blank</a></li>
    <li><a href="/sheets/history" target="_blank">History</a></li>
  </ul>
</section>

<section>
  <h2 class="glitch-text"><span class="glitch-text__content">Character Creation</span><span class="glitch-text__slice" aria-hidden="true">Character Creation</span></h2>

  <ul class="list-disc list-inside p-4">
    <li><a href="/legends" target="_blank">Legends</a></li>
    <li><a href="/forms" target="_blank">Forms</a></li>
    <li><a href="/mechs" target="_blank">Mechs</a></li>
    <li><a href="/sheets/play-aid" target="_blank">Play aid</a></li>
  </ul>
</section>
