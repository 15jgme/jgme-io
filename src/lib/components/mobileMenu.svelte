<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	let linksList = ['Projects', 'Work', 'Publications', 'Contact', 'About'];
	/**
	 * @type {string[]}
	 */
	let urlList = [];
	for (let i = 0; i < linksList.length; i++) {
		urlList.push('/' + linksList[i].toLowerCase() + '/');
	}
	/**
	 * @type {any}
	 */
	export let open;
	export let omittedLink = '';
</script>

{#if open}
	<div class="flex flex-col">
		{#each linksList as link, i}
			{#if omittedLink !== link.toLowerCase()}
				<a transition:fly={{ y: -15, delay: 50 * i }} href={urlList[i]}>
					{link}
				</a>
			{/if}
		{/each}
	</div>

	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}
