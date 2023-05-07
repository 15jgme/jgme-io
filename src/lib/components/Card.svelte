<script lang="ts">
	import type { cardInterface } from './cardInterface';
	import { fade } from 'svelte/transition';

	export let data: cardInterface;
</script>

<div class="card md:w-3/4 bg-base-200 shadow-xl" transition:fade>
	<div class="card-body">
		<h3 class="font-extrabold text-xl md:text-2xl inline card-title">{data.title}</h3>
		<p>
			{data.description}
		</p>
		<div class="flex space-x-2">
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
			<p class="font-bold ">
				Technologies:
				{#each data.technologies as technology, i}
					{#if i < data.technologies.length - 1}
						<span class="italic ">
							{technology},
						</span>
					{:else}
						<span class="italic ">
							{technology}
						</span>
					{/if}
				{/each}
			</p>
		</div>
		{#if data.url}
			<a href={data.url} class="font-extrabold text-secondary">View source code on github</a>
		{/if}
		{#if data.imagesData}
			{#each data.imagesData as image}
				<figure class="flex-col py-2">
					{#if image.fit}
						<img
							loading="lazy"
							decoding="async"
							src={image.location}
							alt={image.alt}
							class="object-cover w-fit md:p-2"
						/>
					{:else}
						<img
							loading="lazy"
							decoding="async"
							src={image.location}
							alt={image.alt}
							class="object-cover h-90 w-96 md:p-2"
						/>
					{/if}

					<figcaption class="italic">{image.caption}</figcaption>
				</figure>
			{/each}
		{/if}
		<slot />
	</div>
</div>
