<!-- https://wireframe.cc/9wNrlD -->
<script>
  import { each } from "svelte/internal";
  import Todo from "./Todo.svelte";
  function shape(ar) {
    var row_count = ar.length;
    var row_sizes = [];
    for (var i = 0; i < row_count; i++) {
      row_sizes.push(ar[i].length);
    }
    return [row_count, Math.min.apply(null, row_sizes)];
  }
  //1
  const power = (n, p = 3) => n ** p;
  let n = 0;
  //2
  const odd = (arr) => arr.filter((a) => a % 2);
  const testArray = [10, 2, 3, 5, 7, 8, 23, 50];
  //3
  const sum = (...args) => args.reduce((a, b) => a + b);
  //4
  const mean = (...args) => args.reduce((a, b) => a + b) / args.length;
  const mean_dirty = (...args) => {
    /* for (const key in args) {
      if (Object.hasOwnProperty.call(args, key)) {
        const element = args[key];
        console.log(element);
      }
    } */
    let sum = 0;
    for (const iterator of args) {
      sum += iterator;
    }
    return sum / args.length;
  };
  //5
  let DNI = "46293061H";
  const DNILetters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const DNILetter = (dni) =>
    DNILetters[(Number(dni.toString().substr(0, 8)) ?? -1) % 23] ?? false;
  const DNICheck = (dni) =>
    typeof dni == "string" &&
    dni.length == 9 &&
    DNILetter(dni) == dni.substr(dni.length - 1, 1);
  //6
  const mineSearch = (array) => {
    const mineArray = array.map((a) => a.map((b) => b));
    if (shape(array).length != 2) return 0;
    array.forEach((x, i) => {
      x.forEach((y, j) => {
        if (!y)
          mineArray[i][j] = [
            (array[i - 1] ?? [])[j - 1] ?? 0 == -1,
            (array[i - 1] ?? [])[j] ?? 0 == -1,
            (array[i - 1] ?? [])[j + 1] ?? 0 == -1,
            array[i][j - 1] ?? 0 == -1,
            (array[i + 1] ?? [])[j - 1] ?? 0 == -1,
            (array[i + 1] ?? [])[j] ?? 0 == -1,
            (array[i + 1] ?? [])[j + 1] ?? 0 == -1,
            array[i][j + 1] ?? 0 == -1,
            array[i][j] ?? 0 == -1,
          ].filter((a) => a).length;
      });
    });
    return mineArray;
  };
  //7
  let startTime = "07:30";
  let endTime = "14:30";
  let bookingTime = "07:30";
  let bookingLength = 15;

  $: bookReunion = new Date(
    new Date(new Date(`1970T${bookingTime}`).getTime()).getTime() +
      bookingLength * 60000
  );
  $: reunionInTime =
    bookReunion.getTime() <= new Date(`1970T${endTime}`).getTime() &&
    bookReunion.getTime() >= new Date(`1970T${startTime}`).getTime();

  const bookReunionFunc = (bookingTime, bookingLength) => {
    const bookReunion = new Date(
      new Date(new Date(`1970T${bookingTime}`).getTime()).getTime() +
        bookingLength * 60000
    );
    return (
      bookReunion.getTime() <= new Date(`1970T${endTime}`).getTime() &&
      bookReunion.getTime() >= new Date(`1970T${startTime}`).getTime()
    );
  };
  //8
  let text = "Test STR";
  let pattern = "STR";
  const findPattern = (haystack, needle) => {
    let n = 0;
    for (let i = 0, j = 0; i < haystack.length; i++) {
      if (needle[j] == haystack[i]) {
        j++;
        if (j == needle.length) {
          n++;
          j = 0;
        }
      } else j = 0;
    }
    return n;
  };
  //9
  let money = 1000;
  let papers = {
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.2: 0,
    0.1: 0,
    0.05: 0,
    0.02: 0,
    0.01: 0,
  };
  const getBills = (money) => {
    let remainingMoney = money;
    let newPapers = { ...papers };
    Object.keys(papers)
      .map((n) => Number(n.toFixed(2)))
      .sort((a, b) => (a > b ? -1 : a < b ? 1 : 0))
      .forEach((p) => {
        if (remainingMoney <= 0) return;
        newPapers[p] = parseInt((remainingMoney / p).toFixed(2));
        remainingMoney -= p * newPapers[p];
      });
    return [newPapers, remainingMoney.toFixed(2)];
  };
  $: [newPapers, remainingMoney] = getBills(money);
</script>

<h1>1. Power</h1>
<div class="flex gap-2 items-center">
  <input type="number" bind:value={n} />
  <span>{n}**3 = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {power(n)}
  </div>
</div>
<h1>2. Odd</h1>
[ {#each testArray as n, i}
  {n}{#if i < testArray.length - 1},{/if}
{/each} ] => [ {#each odd(testArray) as n, i}
  {n}{#if i < odd(testArray).length - 1},{/if}
{/each} ]
<h1>3. Sum of values</h1>
{sum(1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 1, 2, 4, 5, 10)}
<h1>4. Mean</h1>
{mean(4, 4, 6, 4, 2, 3, 3, 3, 5).toFixed(2)}
<h1>5. DNI</h1>
<input class="w-[150px]" type="text" bind:value={DNI} /> Letter: {DNILetter(
  DNI
)}
| Correct DNI?
{DNICheck(DNI)}
<h1>6. Minesweeper</h1>
{#each mineSearch([[0, 0, -1, 0], [0, -1, -1, 0]]) as rows}
  {#each rows as n}
    {n} |
  {/each};
{/each}
<h1>7. Reunion</h1>
<div class="grid gap-4 grid-cols-2 w-1/2">
  <label class="grid">
    Start time:
    <input type="time" bind:value={startTime} />
  </label>
  <label class="grid">
    End time:
    <input type="time" bind:value={endTime} />
  </label>
  <label class="grid">
    Booking time:
    <input type="time" bind:value={bookingTime} />
  </label>
  <label class="grid">
    Booking length (minutes):
    <input type="number" bind:value={bookingLength} />
  </label>
  <div class="grid">
    Booking end:
    {new Date(bookReunion.getTime() - new Date().getTimezoneOffset() * 30000)
      .toISOString()
      .split("T")[1]
      .slice(0, -8)}
  </div>
  <div class="grid">
    Reunion in time?
    {reunionInTime}
  </div>
</div>
<h1>8. Pattern</h1>
<div class="grid gap-4 grid-cols-2 w-1/2">
  <label class="grid">
    Text:
    <input type="text" bind:value={text} />
  </label>
  <label class="grid">
    Pattern:
    <input type="text" bind:value={pattern} />
  </label>
  <div class="grid">
    Occurrences:
    {findPattern(text, pattern)}
  </div>
</div>

<h1>9. Get Money</h1>
<div class="grid gap-4 grid-cols-2 w-1/2">
  <label class="grid h-fit">
    Money:
    <input type="number" step="0.01" bind:value={money} />
  </label>
  <div class="grid">
    {#each Object.keys(newPapers).sort( (a, b) => (Number(a) > Number(b) ? -1 : Number(a) < Number(b) ? 1 : 0) ) as k}
      <p>{k}: {newPapers[k]}</p>
    {/each}
    <p>+ {remainingMoney}</p>
    <p>
      Number of bills: {Object.values(newPapers).reduce((a, b) => a + b, 0)}
    </p>
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
