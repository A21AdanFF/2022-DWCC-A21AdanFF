<script>
  //1
  let fruits = ["pears", "apples", "kiwis", "bananas", "mandarinas"];
  fruits.splice(fruits.indexOf("apples"), 1);
  let fruits1 = [...fruits];
  fruits.splice(fruits.indexOf("bananas") + 1, 0, "oranges", "sandia");
  let fruits2 = [...fruits];
  fruits.splice(fruits.indexOf("kiwis"), 1, "cereixas", "nesperas");
  let fruits3 = [...fruits];
  //2
  const sortMarks = (array) => {
    return array.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  };
  let marks = "4,8,3,10,5";
  //3
  let weekDays = [
    "Luns",
    "Martes",
    "Mércores",
    "Xoves",
    "Venres",
    "Sábado",
    "Domingo",
  ];
  //4
  let text = "test text";
  //5
  const players = [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ];
  const [players1, players2] = players;
  const [gk, ...fieldPlayers] = players1;
  const allPlayers = [...players1, ...players2];
  const players1Final = ["Thiago", "Coutinho", "Periscic", ...players1];
  //6 camelCase
  let words = "first_name last_NAME";
  const toCamelCase = (arr) =>
    arr.map((w) =>
      w.toLowerCase().replace(/_[a-z]/i, (v) => v.charAt(1).toUpperCase())
    );
</script>

<h1>1. Fruits</h1>
<div class="flex gap-2 items-center">
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {#each fruits1 as f}
      <p>{f}</p>
    {/each}
  </div>

  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {#each fruits2 as f}
      <p>{f}</p>
    {/each}
  </div>

  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {#each fruits3 as f}
      <p>{f}</p>
    {/each}
  </div>
</div>

<h1>2. Marks</h1>
<div class="flex gap-2 items-center">
  <input type="text" bind:value={marks} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {#each sortMarks(marks.split(",").map((m) => Number(m))) as m}
      <p>{m}</p>
    {/each}
  </div>
</div>

<h1>3. Weekdays</h1>
<div class="flex gap-2 items-center">
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {weekDays.find((d) => d.startsWith("S"))}
  </div>
</div>
{weekDays.map((d) => d.endsWith("s")).reduce((a, b) => a && b, true)}

<h1>4. Capitalized text</h1>
<div class="flex gap-2 items-center">
  <textarea cols="30" rows="10" bind:value={text} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {text
      .split(/\s/)
      .map((w) => w.charAt(0).toUpperCase() + w.substr(1))
      .join(" ")}
  </div>
</div>

<h1>5. Players</h1>
<div class="flex flex-col w-full p-4">
  <p>{players1};</p>
  <p>{players2};</p>
  <p>{gk};</p>
  <p>{fieldPlayers};</p>
  <p>{allPlayers};</p>
  <p>{players1Final};</p>
</div>

<h1>6. Camel Case</h1>

<div class="flex gap-2 items-center">
  <input type="text" bind:value={words} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {toCamelCase(words.split(" "))}
  </div>
</div>

<style>
  h1 {
    @apply font-bold text-2xl mt-4;
  }
  input {
    @apply border-2 border-cyan-700 px-4 rounded-md;
  }
</style>
