<script lang="ts">
	import { fade } from "svelte/transition";
    import type { pubInterface } from "./cardInterface";

    export let data: pubInterface;
</script>

<div class="card md:w-3/4 bg-base-200 shadow-xl" transition:fade>
	<div class="card-body">
		<h3 class="font-extrabold text-xl md:text-2xl inline card-title">{data.title}</h3>
		<p>
			{data.authors}
		</p>
		<p>
            {data.journal}
        </p>
        <p class="font-bold">
            Abstract:
        </p>
        <p class="italic">
            {data.abstract}
        </p>
			<a
				href={data.url}
				class="font-extrabold text-secondary"
				>Full text available on {data.host}</a
			>
        <slot/>
	</div>
</div>