<script>
  //1
  let totalMinutes = 0;
  $: hours = Math.trunc(totalMinutes / 60);
  $: minutes = totalMinutes % 60;
  //2
  let radius = 0;
  $: area = (Math.PI * radius ** 2).toFixed(2);
  $: p = 2 * Math.PI * radius;
</script>

<h1>1:</h1>
<input type="number" bind:value={totalMinutes} />
{hours}:{minutes}
<h1>2:</h1>
<input type="number" bind:value={radius} />
{area}
{p}
