<script lang="ts">
	import type { cardInterface } from '$lib/components/cardInterface';
	import Card from '$lib/components/Card.svelte';
	import moonflower_image from '$lib/assets/images/moonflower.png';

	let ardutask: cardInterface = {
		title: 'Ardutask',
		description:
			'A platformIO library to easily implement multi-tasking processes, without the need for a RTOS. Designed to be multi-platform, including desktop platforms, and easily extensible to new systems.',
		skills: ['C/C++', 'embedded systems'],
		technologies: ['PlatformIO'],
		url: 'https://github.com/15jgme/Ardutask'
	};

	let pawprints: cardInterface = {
		title: 'Pawprints',
		description:
			'A cross-platform image sharing app written in Flutter with PocketBase as a backend. Originally intended to be an image sharing app for friends and family pets, it now serves as a template and example for implementing an image sharing app with Pocket-Flutter.',
		skills: ['App development', 'Dart'],
		technologies: ['Flutter', 'Pocketbase'],
		url: 'https://github.com/15jgme/Pawprints'
	};

	let rx1: cardInterface = {
		title: 'RX1',
		description:
			'A state logging, telemetry, and flight phase management framework for instrumented model rockets.',
		skills: ['C/C++', 'Embedded systems', 'Code generation'],
		technologies: ['PlatformIO', 'Grafana', 'MQTT'],
		url: 'https://github.com/15jgme/RX1'
	};

	let tusk: cardInterface = {
		title: 'Tusk',
		description:
			'A lightweight cli tool for updating docker container instances. Written in Go using BubbleTea.',
		skills: ['Go'],
		technologies: ['Docker', 'Bubbletea'],
		url: 'https://github.com/15jgme/tusk',
		imagesData: [
			{
				location: 'https://raw.githubusercontent.com/15jgme/tusk/main/resources/tuskDemo.gif',
				alt: 'Example of tusk tool being used to update a docker container',
				caption: '',
				fit: true
			}
		]
	};

	let moonflower: cardInterface = {
		title: 'Moonflower',
		description: 'A webapp to explore Arxiv and encourage daily reading',
		skills: ['Web design', 'Javascript/Typescript', 'HTML'],
		technologies: ['Sveltekit', 'TailwindCSS', 'Pocketbase'],
		url: 'https://github.com/15jgme/moonflower',
		imagesData: [
			{
				location: moonflower_image,
				alt: 'A view of the browse menu in the moonflower app',
				caption: '',
				fit: true
			}
		]
	};

	let jgmeio: cardInterface = {
		title: 'This website!',
		description: 'Written with Sveltkit and made pretty pretty with TailwindCSS and DaisyUI.',
		skills: ['Web development'],
		technologies: ['Javascript/Typescript', 'Svelte/Sveltekit', 'Docker'],
		url: 'https://github.com/15jgme/jgme-io'
	};
</script>

<div class="text-sm md:text-base font-mono transition-all flex ">
	<body>
		<div class="px-5">
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
			<h2 class="font-extrabold text-2xl md:text-3xl inline">Software projects</h2>
		</div>
		<div class="justify-center flex py-3">
			<Card data={ardutask}>
				<p>
					Ardutask allows users write many 'tasks' to run at a desired rate. Tasks are added by the
					user of the library and can do anything. They derive from a simple base task class which
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

		<div class="justify-center flex py-3">
			<Card data={moonflower}>
				<a href="https://moonflower.jgme.io" class="btn min-w-fit">Check out moonflower</a>
				<p>
					I wrote moonflower to encourage me to keep an eye on the new and exciting research
					regularly published to Arxiv. The original idea was to pick a recently published paper
					everyday for users from their favorite Arxiv catagories, after reading users can rate how
					interesting they found the research and the most interesting articles for a given week are
					collected on a list available to all users. The project is still in development and I
					intend to add on additional searching and browse features to help users search Arxiv
					across different catagories. This project was my first real webapp and leverages
					Pocketbase for the backend.
				</p>
			</Card>
		</div>

		<div class="justify-center flex py-3">
			<Card data={tusk}>
				<p>
					I wrote tusk to help manage deployments of my moonflower project and personal website on a
					VPS. I use github actions to build docker images for these projects and then once built,
					tusk to deploy. This project was one of my first entries to Go and BubbleTea, and I had a
					great experience working with both!
				</p>
			</Card>
		</div>

		<div class="justify-center flex py-3">
			<Card data={pawprints}>
				<p>
					This app was my first big project with Flutter and mobile app development, it uses many of
					Pocketbase's features including: authentication and realtime streaming. Image likes are
					streamed from the database live so you'll see every time your friends like your photo
					without needing to reload. As Flutter practice, this app makes heavy use of both Provider
					and stateful widgets; In my next flutter project, I'm looking to use the Bloc provider
					pattern to learn more about it.
				</p>
			</Card>
		</div>

		<div class="justify-center flex py-3">
			<Card data={rx1}>
				<p>
					The most interesting component of this project was a code generated internal database
					system, which generates a message class enabling communication between different
					components of the firmware. This database is then serialized at set intervals and sent to
					the ground station via XBee. The ground station deserializes the message, publishes it to
					an MQTT server, and displays the data real-time using Grafana. The neat thing is that the
					entire message database is generated from a very simple message file, very similar to a
					ROS message file, and a code generation script written in Python takes care of the changes
					on both the ground station side and the flight computer side. With only one line of code
					you can access and write new data anywhere in the rocket firmware and instantly see it
					show up in Grafana.
				</p>
				<div class="items-center flex flex-col">
					<blockquote class="twitter-tweet">
						<p lang="en" dir="ltr">
							Couple new RX1 additions. It now has a state machine handling different flight modes,
							and a task handler which tries its hardest to run jobs at certain frequencies. (also
							some other frills) <a href="https://t.co/9903L9jEmo">pic.twitter.com/9903L9jEmo</a>
						</p>
						&mdash; Jackson&#39;s projects (@robots_n_rocket)<a
							href="https://twitter.com/robots_n_rocket/status/1482753914407641090?ref_src=twsrc%5Etfw"
							>January 16, 2022</a
						>
					</blockquote>
					<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
			</Card>
		</div>

		<div class="justify-center flex py-3">
			<Card data={jgmeio} />
		</div>
	</body>
</div>
