<script>
    export let codes;
    let searchCode="";
    $: toDisplay = codes.map(c=>[{code:c["Code"],opacity:c["Code"].includes(searchCode)?100:0}][0])
</script>

<input type="text" bind:value={searchCode}/>
<p>{searchCode}</p>
<div
    class="border-black border-[1px] p-2 rounded-sm grid grid-cols-2 gap-2 shadow-md"
>
    {#each toDisplay as c}
        <div
            class="flex justify-center border-black border-[1px] p-1 rounded-sm shadow-md \
        transition-all duration-200 hover:bg-zinc-100 \
        cursor-pointer opacity-{c.opacity}"
        >
            {c.code}
        </div>
    {/each}
</div>


