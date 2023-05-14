<script lang="ts">
	import type { skillInterface } from './cardInterface';
	import { fade } from 'svelte/transition';

	export let data: skillInterface;
</script>

<div class="card md:w-3/4 bg-base-200 shadow-xl" transition:fade>
	<div class="card-body">
		<h3 class="font-extrabold text-xl md:text-2xl flex-row card-title">
			{data.catagory}
		</h3>

		<div class="space-x-2">
			{#if data.intermediateSkills}
				<p class="font-bold space-x-2 py-1 space-y-1">
					Experienced:
					{#each data.experiencedSkills as skill, i}
						{#if skill.redirect}
							<a class="italic badge hover:badge-secondary py-1" href={skill.redirect}>
								{skill.name}
							</a>
						{:else}
							<span class="italic badge py-1">
								{skill.name}
							</span>
						{/if}
					{/each}
				</p>
				<p class="font-bold space-x-2  py-1 space-y-1">
					Familiar:
					{#each data.intermediateSkills as skill, i}
						{#if skill.redirect}
							<a class="italic badge hover:badge-secondary" href={skill.redirect}>
								{skill.name}
							</a>
						{:else}
							<span class="italic badge">
								{skill.name}
							</span>
						{/if}
					{/each}
				</p>
			{:else}
				<div class="py-1 space-y-1 space-x-2">
					{#each data.experiencedSkills as skill, i}
						{#if skill.redirect}
							<a class="italic badge hover:badge-secondary" href={skill.redirect}>
								{skill.name}
							</a>
						{:else}
							<span class="italic badge">
								{skill.name}
							</span>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
		<slot />
	</div>
</div>
