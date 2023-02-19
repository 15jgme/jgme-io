<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';
	onMount(() => {
		themeChange(false);
	});

	let theme: string = 'dark';
</script>

<div class="font-mono">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/projects">Projects</a></li>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<li><a href="/work">Work</a></li>
					<li><a href="/publications">Publications</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>
			<a
				href="/"
				class="btn btn-ghost normal-case text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
			>
				jgme.io
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/projects">Projects</a></li>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li><a href="/work">Work</a></li>
				<li><a href="/publications">Publications</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>

		<div class="navbar-end">
			<div class="m-5 scale-0 md:scale-100">
				<span class="inline">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
					  </svg>
					

					<!-- <select data-choose-theme class="select select-bordered select-primary w-full max-w-3xl text-xl"> -->
					<input
						type="radio"
						name="radio-1"
						class="radio"
						data-toggle-theme="cupcake"
						data-act-class="pl-4"
						checked
					/>
				</span>
				<span>
					<input
						type="radio"
						name="radio-1"
						class="radio"
						data-toggle-theme="dark"
						data-act-class="pl-4"
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 inline"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
					  
				</span>
			</div>
			<a href="/contact" class="btn">Contact</a>
		</div>
	</div>
</div>

<slot />
