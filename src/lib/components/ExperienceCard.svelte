<script lang="ts">
	import type { experienceInterface } from './cardInterface';
	import { fade } from 'svelte/transition';

	export let data: experienceInterface;
</script>

<div class="card md:w-3/4 bg-base-200 shadow-xl" transition:fade>
	<div class="card-body">
		<h3 class="font-extrabold text-xl md:text-2xl inline card-title">
			{data.company} <span class="font-normal text-lg">{data.role}</span>
		</h3>
		<p class="text-sm">
			{data.dates}
		</p>
		{#if data.description.length > 1}
			<ul class="">
				{#each data.description as bullet_point}
					<li class="list-disc py-1">
						{bullet_point}
					</li>
				{/each}
			</ul>
		{:else}
			<p>
				{data.description}
			</p>
		{/if}

		<div class="flex space-x-2">
			{#if data.skills}
				<p class="font-bold ">
					Skills:
					{#each data.skills as skill, i}
						{#if i < data.skills.length - 1}
							<span class="italic ">
								{skill},
							</span>
						{:else}
							<span class="italic ">
								{skill}
							</span>
						{/if}
					{/each}
				</p>
			{/if}
		</div>
		<slot />
	</div>
</div>
