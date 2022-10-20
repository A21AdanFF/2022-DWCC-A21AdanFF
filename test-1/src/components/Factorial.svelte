<script>
</script>

<div class="flex gap-2">
  {#each people as person}
    <div class="flex flex-col gap-2">
      <input
        class="px-2 border-slate-300 border-2 rounded-sm"
        type="number"
        step="0.5"
        bind:value={person.weight}
      />
      <input
        class="px-2 border-slate-300 border-2 rounded-sm"
        type="number"
        step="0.01"
        bind:value={person.height}
      />
      <div>{person.weight / person.height ** 2}</div>
    </div>
  {/each}
</div>
