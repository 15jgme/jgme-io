<script lang="ts">
	import phantomPowerImg from '$lib/assets/images/phantomPower.jpg?w=300&h=400&webp';
	import bansheeImg from '$lib/assets/images/banshee.jpg?w=300&h=400&webp';
	import athenaImg from '$lib/assets/images/athena.jpg?w=300&h=400&webp';

	import Card from '$lib/components/Card.svelte';
	import type { cardInterface } from '$lib/components/cardInterface';

	let phantomPower: cardInterface = {
		title: 'Phantom Power',
		description:
			'A flight computer for model rockets featuring: telemetry, active control by servo actuation, pyro-deployment, and state logging.',
		skills: ['PCB design', 'electronics'],
		technologies: ['KiCad'],
		imagesData: [
			{
				location: phantomPowerImg,
				alt: 'Integrated Phantom Power flight computer',
				caption: 'Integrated Phantom Power flight computer'
			}
		]
	};

	let banshee: cardInterface = {
		title: 'Banshee',
		description:
			"A low-power, pitot-static tube recording device for the Queen's Rocket Engineering Team's 2020 rocket. The board is placed inside the nosecone of the rocket and sleeps until the high accelerations of launch are detected, after which it records airspeed data using a high accuracy differential pressure sensor. This board is a unique component of the avionics package as it needed to work independently of the main avionics system.",
		skills: ['PCB design', 'electronics'],
		technologies: ['KiCad'],
		imagesData: [
			{
				location: bansheeImg,
				alt: 'Banshee airspeed computer',
				caption: 'Banshee airspeed computer'
			}
		]
	};

	let athena: cardInterface = {
		title: 'Athena series',
		description:
			'An earlier generation series of model rocket flight computer with reduced features compared to Phantom Power. The final iteration featured an ESP32 for short range telemetry and the ability to actuate three servos. This was the project where I got started with PCB design.',
		skills: ['PCB design', 'electronics'],
		technologies: ['EasyEDA'],
		imagesData: [
			{
				location: athenaImg,
				alt: 'Athena flight computer',
				caption: 'Athena flight computer (gen 5)'
			}
		]
	};
</script>

<div class="text-sm md:text-base font-mono p-5 transition-all">
	<title>Mechatronics projects</title>
	<body>
		<div class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
				/>
			</svg>

			<h2 class="font-extrabold text-2xl md:text-3xl inline pb-4">Mechatronics projects</h2>
		</div>

		<div class="flex justify-center py-3">
			<Card data={phantomPower} />
		</div>
		<div class="flex justify-center py-3">
			<Card data={banshee} />
		</div>
		<div class="flex justify-center py-3">
			<Card data={athena} />
		</div>
	</body>
</div>
