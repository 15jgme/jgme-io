<script>
	export let omittedLink = '';
</script>

<div>
	{#if omittedLink !== 'home'}
		<a href="/"
			><h1
				class="justify-start font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline"
			>
				jgme.io
			</h1></a
		>
	{/if}

	<ul class="inline-flex justify-end font-mono p-5 text-gray-800 transition-all">
		{#if omittedLink !== 'projects'}
			<li
				class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-gray-100"
			>
				<a href="/projects/">Projects</a>
			</li>
		{/if}
		{#if omittedLink !== 'work'}
			<li
				class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-gray-100"
			>
				<a href="/work/">Work</a>
			</li>
		{/if}
		{#if omittedLink !== 'publications'}
			<li
				class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-gray-100"
			>
				<a href="/publications/">Publications</a>
			</li>
		{/if}
		{#if omittedLink !== 'contact'}
			<li
				class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-gray-100"
			>
				<a href="/contact/">Contact</a>
			</li>
		{/if}
		{#if omittedLink !== 'about'}
			<li
				class="mr-6 p-2 rounded-2xl hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-gray-100"
			>
				<a href="/about/">About</a>
			</li>
		{/if}
	</ul>
</div>
