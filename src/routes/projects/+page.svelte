<script lang="ts">
	import type { cardInterface } from '$lib/components/cardInterface';
	import Card from '$lib/components/Card.svelte';
	import icuasGif from '$lib/assets/images/robotics/icuasuav.gif';
	import icuasSim from '$lib/assets/images/robotics/ICUASSimulation.mp4';

	let icuas: cardInterface = {
		title: 'UAV competition, ICUAS 2022 (2nd place out of 50 teams)',
		description:
			'The objective of the International Conference on Unmanned Aerial Systems (ICUAS) UAV competition, was to autonomously navigate through an obstacle field, search for an AR tag in an unknown location, and compute and execute a launch trajectory to land a payload on the AR tag. I participated as part of McGill Aerospace Mechatronics Lab (AML) team. The first phase of the competition was simulation based, where we worked with ROS and Gazebo to submit a solution to challenge which was tested by the organizers on a random obstacle course. Once we made it to the second phase of the competition, we (alongside the other top-5 teams) shifted our focus to performing the challenge on a real UAV in-person at ICUAS 2022 in Dubrovnik. As the competition was student focused and organized by a research conference, our competitors primarily consisted of graduate robotics labs from other universities. We ended up placing 2nd out of over 50 registered teams. On the team my main contributions were the tag detection system, including an Kalman filter to better estimate tag position, and the path-planning node which used A* to compute a safe path to the objective on-line.',
		skills: ['A* path-planning', 'robotics', 'estimation'],
		technologies: ['ROS', 'Gazebo', 'Python', 'C++', 'Docker'],
		imagesData: [
			{
				location: icuasGif,
				alt: 'A quadrotor UAV autonomously detecting an AR marker and launching a ball at the target',
				caption: '100% autonomous tag detection and ball launch',
				fit: true,
			}
		]
	};

	let ardutask: cardInterface = {
		title: 'Ardutask',
		description:
			'A platformIO library to easily implement multi-tasking processes, without the need for a RTOS. Designed to be multi-platform, including desktop platforms, and easily extensible to new systems.',
		skills: ['C/C++', 'embedded systems'],
		technologies: ['PlatformIO'],
		url: 'https://github.com/15jgme/Ardutask'
	};

</script>

<div class="text-sm md:text-base font-mono p-5 transition-all">
	<body
		><h2 class="font-extrabold text-2xl md:text-3xl">Projects</h2>
		<p>
			I love to use projects to explore new topics (usually in my free time) and expand my
			comfort-zone. I'm also a strong believer in open source, so most projects I've worked on
			(software or hardware), can be found on my GitHub in case they are helpful to others.
		</p>
		<p class="py-5">
			My projects usually fall into the following catagories, which would you like to see more of?
		</p>
		<div class="flex justify-center space-x-3">
			<a
				href="/projects/software_development/"
				role="button"
				class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
			>
				<div>
					<p class="font-bold flex">
						Software
						<span class="">
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
									d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
								/>
							</svg>
						</span>
					</p>
				</div>
			</a>
			<a href="/projects/robotics/" role="button" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
				<div>
				
					<p class="font-bold flex">Robotics
						<span class="">
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
							d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
						/>
					</svg>
				</span>
			</p>
			</div>
			</a>

			<a
				href="/projects/mechatronics/"
				role="button"
				class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
			>
			<div>
				
					<p class="font-bold flex">Mechatronics
						<span>
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
				</span>
			</p>
			</div>
			</a>
		</div>
		<div class="pt-2">
			<div class="flex space-x-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-8 h-8 inline"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
					/>
				</svg>
				<h3 class="font-extrabold text-xl md:text-2xl inline">Favourites</h3>
			</div>
			<div class="justify-center flex py-3">
				<Card data={ardutask}>
					<p>
						Ardutask allows users write many 'tasks' to run at a desired rate. Tasks are added by the
						user of the library and can do anything! They derive from a simple base task class which
						closely resembles the standard Arduino setup/loop structure. A backend manager uses
						hardware timers on embedded systems and software timers on desktop, to selectively run
						each task so that it is executed at its desired rate.
					</p>
					<p>
						I started this project when I began to feel claustrophobic running bare-metal for embedded
						projects. I didn't want to inherit the additional complexity of an RTOS, but I did want to
						separate my different processes for embedded projects. This project is one part in a
						larger objective to create a small, ROS compatible, multi-platform estimation toolbox for
						embedded systems.
					</p>
				</Card>
			</div>
			<div class="py-3 flex justify-center">
				<Card data={icuas}>
					<video autoplay loop muted class="w-fit">
						<source src={icuasSim} type="video/mp4" />
					</video>
					<caption class="italic"
						>Gazebo simulation of a quad rotor autonomously navigating a maze (right). Pointcloud
						data and green A* path (left).
					</caption>
				</Card>
			</div>
		</div></body
	>
</div>
