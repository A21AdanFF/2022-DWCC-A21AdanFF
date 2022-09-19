<script>
    import { onMount } from "svelte";
    export let todo;
</script>

{#each Object.values(todo) as v}
    <div>{v}</div>
{/each}
