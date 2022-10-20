<script>
  //1,3
  let date = new Date("2000-07-25");
  //2
  let date1 = new Date(`${new Date().getFullYear()}-07-25`);
  //4
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  const nDays = (m, y) => new Date(y, m, 0).getDate();
  //5
  let dateStr = new Date().toISOString().split("T")[0];
  const weekend = (date) => date.getDay() == 6 || !date.getDay();
  //6
  const daysPassed = (date) =>
    parseInt((date - new Date(date.getFullYear(), 0)) / (24 * 60 * 60 * 1000));
</script>

<h1>1.</h1>
<div class="flex gap-2 items-center">
  <span>Date = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {date.getDay()}
  </div>
</div>
<h1>2.</h1>
<div class="flex gap-2 items-center">
  <span>Date = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {date1.toLocaleString("en-US", { timeZone: "GMT", weekday: "long" })}
  </div>
</div>

<h1>3.</h1>
<div class="flex gap-2 items-center">
  <span>Days passed since {date.toISOString()} = </span>
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {parseInt((new Date() - date) / (24 * 60 * 60 * 1000))}
  </div>
</div>

<h1>4.</h1>
<div class="flex gap-2 items-center">
  <span>Days of month and year</span>
  <input type="number" max="12" min="1" bind:value={month} />
  <input type="number" bind:value={year} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {nDays(month, year)}
  </div>
</div>

<h1>5.</h1>
<div class="flex gap-2 items-center">
  <span>Weekend?</span>
  <input type="date" bind:value={dateStr} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {weekend(new Date(dateStr))}
  </div>
</div>

<h1>6.</h1>
<div class="flex gap-2 items-center">
  <span>Days passed in year:</span>
  <input type="date" bind:value={dateStr} />
  <div class="bg-black/20 px-2 min-w-[50px] text-center rounded-md">
    {daysPassed(new Date(dateStr))}
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
