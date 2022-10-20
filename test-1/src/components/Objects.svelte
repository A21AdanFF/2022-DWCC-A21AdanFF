<script>
  //1
  const TV = {
    marca: "",
    categoria: "televisores",
    unidades: 4,
    prezo: 354.99,
  };
  const price = (tv) => tv.unidades * tv.prezo;
  //2
  const game = {
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  const { team1, x: draw, team2 } = game.odds;
  //3
  const game1 = {
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  };
  const scorers = Object.fromEntries(
    game1.scored
      .filter((p, i, s) => s.indexOf(p) == i)
      .map((p) => [p, game1.scored.filter((_p) => _p === p).length])
  );
  console.log(scorers);
</script>

<h1>1. TV</h1>
<div class="grid-gap-4">
  {price(TV)}€
</div>

<h1>2. TV</h1>
<div class="grid-gap-4">
  {team1}
  {draw}
  {team2}
</div>

<h1>3. Score</h1>
<div class="grid-gap-4">
  {game1.scored.map((g, i) => `Gol ${i + 1}: ${g}`)}
</div>

<style>
  h1 {
    @apply font-bold text-2xl mt-4;
  }
  input {
    @apply border-2 border-cyan-700 px-4 rounded-md;
  }
</style>
