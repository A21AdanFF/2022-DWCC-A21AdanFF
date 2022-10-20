<script>
  //1
  const gameEvents = new Map([
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"],
  ]);
  $: events = [...new Set([...gameEvents.values()]).values()];
  //2
  $: strEvents = [...gameEvents.entries()].map(
    (e) => `[${e[0] < 45 ? "PRIMEIRA" : "SEGUNDA"} PARTE] ${e[0]}: ${e[1]}`
  );
  //gameEvents.forEach((k, v) => console.log(e));
</script>

<h1>1. TV</h1>
<div class="grid-gap-4">
  <p>{events}</p>
  <p>{strEvents}</p>
</div>

<style>
  h1 {
    @apply font-bold text-2xl mt-4;
  }
  input {
    @apply border-2 border-cyan-700 px-4 rounded-md;
  }
</style>
