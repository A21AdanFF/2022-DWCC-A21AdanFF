<script>
  import Math from "./Math.svelte";

  //1
  let str = "";
  $: reversedStr = str.split("").reverse().join("");
  //2
  let toRemove = "";
  const removeFromString = (str, characters) => {
    characters.forEach((c) => {
      str = str.replaceAll(c, "");
    });
    return str;
  };
  //3
  const topCharacter = (str) => {
    let unique = [];
    str.split("").forEach((c) => {
      if (!unique.includes(c)) unique = [...unique, c];
    });

    return ((unique
      .map((c) => [c, (str.match(new RegExp(`${c}`, "g")) ?? []).length])
      .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0)) ?? [""])[0] ?? [
      "",
    ])[0];
  };
  //4
  const mask = (str) => {
    if (!Number(str)) return "X";
    return str
      .split("")
      .map((c, i) => (i < str.length - 4 ? "*" : c))
      .join("");
  };
  //5
  let flight =
    "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";
  const processFlight = (flight) =>
    flight.split("+").map((f) =>
      f
        .split(";")
        .map((c, i) => {
          if (i == 0) return c.substr(1).replaceAll("_", " ");
          else if (i < 3)
            return c.match(/([a-z,A-Z]{3})([0-9]*)/)[1].toUpperCase();
          else return `(${c.replaceAll(":", "h")})`;
        })
        .join(" ")
    );
</script>

<input type="text" bind:value={str} />
<h1>1. Reverse</h1>
<div class="flex gap-2 items-center">
  <span>Reversed = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {reversedStr}
  </div>
</div>

<h1>2. Eliminate characters</h1>
<div class="flex gap-2 items-center">
  Characters to remove (separated by ",")<input
    type="text"
    bind:value={toRemove}
  />
  <span>Cleaned = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {removeFromString(str, toRemove.split(","))}
  </div>
</div>

<h1>3. Most repeated</h1>
<div class="flex gap-2 items-center">
  <span>Most repeated character = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {topCharacter(str)}
  </div>
</div>

<h1>4. Mask</h1>
<div class="flex gap-2 items-center">
  <span>Mask of {str} = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {mask(str)}
  </div>
</div>

<h1>5. Flight</h1>
<div class="flex gap-2 items-center">
  <span>Raw flight = </span>
  <input class="w-full" type="text" bind:value={flight} />
</div>
<div class="px-2 min-w-[50px] rounded-md text-end">
  {#each processFlight(flight) as f}
    <p>{f}</p>
  {/each}
</div>

<style>
  h1 {
    @apply font-bold text-2xl mt-4;
  }
  input {
    @apply border-2 border-cyan-700 px-4 rounded-md;
  }
</style>
