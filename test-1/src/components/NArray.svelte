<script>
  let l = 0;
  let array = [];
</script>

<input type="number" bind:value={l} />
<button
  on:click={() => {
    array = [...Array(l + 1).keys()].map((n) => n ** 2);
  }}>Generate</button
>

<ul>
  {#each array as n}
    <li>{n}</li>
  {/each}
  Total: {array.reduce((a, b) => a + b, 0)}
</ul>
