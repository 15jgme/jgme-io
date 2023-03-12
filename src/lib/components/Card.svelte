<script lang="ts">
	import type { cardInterface } from './cardInterface';

	export let data: cardInterface;
</script>

<div class="card w-11/12 md:w-3/4 bg-base-100 shadow-xl">
	<div class="card-body">
		<h3 class="font-extrabold text-2xl inline card-title">{data.title}</h3>
		<p>
			{data.description}
		</p>
		<div class="flex space-x-2">
			<p class="font-bold ">
				Skills:
				{#each data.skills as skill,i}
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
					<img
						loading="lazy"
						decoding="async"
						src={image.location}
						width="50"
						height="100"
						alt={image.alt}
						class="object-cover h-90 w-96 p-2"
					/>
					<figcaption class="italic">{image.caption}</figcaption>
				</figure>
			{/each}
		{/if}
		<slot />
	</div>
</div>
