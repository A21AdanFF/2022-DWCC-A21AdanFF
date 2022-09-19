<script>
    import Codes from "../components/Codes.svelte";
    import {onMount} from "svelte"
    let codes = []
    onMount(async ()=>{
        const response = await fetch("https://cpanel.digicard.pt/api/codes.php")
        codes = await response.json()
    })
</script>
<Codes {codes}/>
