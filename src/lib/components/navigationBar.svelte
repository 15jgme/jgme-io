<script lang="ts">
	import MobileMenu from './mobileMenu.svelte';
	import DeviceDetector from 'svelte-device-detector';
	import { Hamburger } from 'svelte-hamburgers';
	let open: boolean;
	export let omittedLink = '';
	let linksList = ['Projects', 'Work', 'Publications', 'Contact', 'About'];
	let urlList: string[] = [];
	for (let i = 0; i < linksList.length; i++) {
		urlList.push('/' + linksList[i].toLowerCase() + '/');
	}
</script>

<DeviceDetector showInDevice="desktop"
	><div>
		{#if omittedLink !== 'home'}
			<a href="/"
				><h1
					class="justify-start font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline"
				>
					jgme.io
				</h1></a
			>
		{/if}
		<ul class="inline-flex justify-end font-mono p-5 transition-all">
			{#each linksList as link, i}
				{#if omittedLink !== link.toLowerCase()}
					<li
						class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600"
					>
						<a href={urlList[i]}>{link}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div></DeviceDetector
>

<DeviceDetector showInDevice="mobile"
	><Hamburger bind:open color="white" />

	<MobileMenu bind:open omittedLink={omittedLink} /></DeviceDetector
>

