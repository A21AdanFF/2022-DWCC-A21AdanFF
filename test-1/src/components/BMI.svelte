<script>
  let l = 0;
  let array = [];
  const people = [
    {
      weight: 59,
      height: 1.75,
    },
    {
      weight: 68,
      height: 1.78,
    },
  ];
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
      <div>{(person.weight / person.height ** 2).toFixed(2)}</div>
    </div>
  {/each}
</div>

Biggest BMI: {Math.max(...people.map((p) => p.weight / p.height ** 2)).toFixed(
  2
)}
