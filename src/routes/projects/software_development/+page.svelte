<script>
	import NavigationBar from '$lib/components/navigationBar.svelte';
</script>

<div class="font-mono p-5 text-gray-800 transition-all">
	<header>
		<NavigationBar omittedLink={''}/>
	</header>
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
					d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
				/>
			</svg>
			<h2 class="font-extrabold text-3xl inline">Software projects</h2>
		</div>
		<div class="pt-4">
			<h3 class="font-extrabold text-2xl inline">Ardutask</h3>
			<p>
				A platformIO library to easily implement multi-tasking processes, without the need for a
				RTOS. Designed to be multi-platform, including desktop platforms, and easily extensible to
				new systems.
			</p>
			<div class="flex space-x-2">
				<p class="font-bold ">Skills:</p>
				<p class="italic ">C/C++, embedded systems</p>
				<p class="font-bold ">Technologies:</p>
				<p class="italic ">PlatformIO</p>
			</div>
			<a
				href="https://github.com/15jgme/Ardutask"
				class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 hover:from-purple-300 hover:to-pink-500 transition-all"
				>View source code on github</a
			>
			<p>
				Ardutask allows users write many 'tasks' to run at a desired rate. Tasks are added by the
				user of the library and can do anything! They derive from a simple base task class which
				closely resembles the standard Arduino setup/loop structure. A backend manager uses hardware
				timers on embedded systems and software timers on desktop, to selectively run each task so
				that it is executed at its desired rate.
			</p>
			<p>
				I started this project when I began to feel claustrophobic running bare-metal for embedded
				projects. I didn't want to inherit the additional complexity of an RTOS, but I did want to
				separate my different processes for embedded projects. This project is one part in a larger
				objective to create a small, ROS compatible, multi-platform estimation toolbox for embedded
				systems.
			</p>
			<!-- <figure>
				<img
					loading="lazy"
					decoding="async"
					src={phantomPowerImg}
					width="50"
					height="100"
					alt="Integrated Phantom Power flight computer"
					class="object-cover h-90 w-96 p-2"
				/>
				<figcaption class="italic">Integrated Phantom Power flight computer</figcaption>
			</figure> -->
		</div>
		<div class="pt-4">
			<h3 class="font-extrabold text-2xl inline">Pawprints</h3>
			<p>
				A cross-platform image sharing app written in Flutter with PocketBase as a backend.
				Originally intended to be an image sharing app for friends and family pets, it now serves as
				a template and example for implementing a image sharing app with Pocket-Flutter.
			</p>
			<div class="flex space-x-2">
				<p class="font-bold ">Skills:</p>
				<p class="italic ">Moble and web app development, Networking</p>
				<p class="font-bold ">Technologies:</p>
				<p class="italic ">Dart, Flutter, Go, PocketBase</p>
			</div>
			<a
				href="https://github.com/15jgme/Pawprints"
				class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 hover:from-purple-300 hover:to-pink-500 transition-all"
				>View source code on github</a
			>
			<p>
				This app was my first big project with Flutter and mobile app development, it uses many of
				Pocketbase's features including: authentication and realtime streaming. Image likes are
				streamed from the database live so you'll see every time your friends like your photo
				without needing to reload. As Flutter practice, this app makes heavy use of both Provider
				and stateful widgets; In my next flutter project, I'm looking to use the Bloc provider
				pattern to learn more about it.
			</p>
			<!-- <figure>
				<img
					loading="lazy"
					decoding="async"
					src={phantomPowerImg}
					width="50"
					height="100"
					alt="Integrated Phantom Power flight computer"
					class="object-cover h-90 w-96 p-2"
				/>
				<figcaption class="italic">Integrated Phantom Power flight computer</figcaption>
			</figure> -->
		</div>
		<div class="pt-4">
			<h3 class="font-extrabold text-2xl inline">RX1</h3>
			<p>
				A state logging, telemetry, and flight phase management framework for instrumented model
				rockets.
			</p>
			<div class="flex space-x-2">
				<p class="font-bold ">Skills:</p>
				<p class="italic ">C/C++, Code Generation</p>
				<p class="font-bold ">Technologies:</p>
				<p class="italic ">Grafana, MQTT, PlatformIO</p>
			</div>
			<a
				href="https://github.com/15jgme/RX1"
				class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 hover:from-purple-300 hover:to-pink-500 transition-all"
				>View source code on github</a
			>
			<p>
				The most interesting component of this project was a code generated internal database
				system, which generates a message class enabling communication between different components
				of the firmware. This database is then serialized at set intervals and sent to the ground
				station via XBee. The ground station deserializes the message, publishes it to an MQTT
				server, and displays the data real-time using Grafana. The neat thing is that the entire
				message database is generated from a very simple message file, very similar to a ros message
				file, and a code generation script written in Python takes care of the changes on both the
				ground station side and the flight computer side. With only one line of code you can access
				and write new data anywhere in the rocket firmware and instantly see it show up in Grafana.
			</p>
			<blockquote class="twitter-tweet">
				<p lang="en" dir="ltr">
					Couple new RX1 additions. It now has a state machine handling different flight modes, and
					a task handler which tries its hardest to run jobs at certain frequencies. (also some
					other frills) <a href="https://t.co/9903L9jEmo">pic.twitter.com/9903L9jEmo</a>
				</p>
				&mdash; Jackson&#39;s projects (@robots_n_rocket)<a
					href="https://twitter.com/robots_n_rocket/status/1482753914407641090?ref_src=twsrc%5Etfw"
					>January 16, 2022</a
				>
			</blockquote>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
		<div class="pt-4">
			<h3 class="font-extrabold text-2xl inline">This website!</h3>
			<h6 class="font-extrabold text-1xl inline italic text-gray-300">(very meta)</h6>
			<p>Written with Sveltkit and made pretty pretty with TailwindCSS</p>
			<div class="flex space-x-2">
				<p class="font-bold ">Skills:</p>
				<p class="italic ">Web development</p>
				<p class="font-bold ">Technologies:</p>
				<p class="italic ">JavaScript, Svelte, Docker</p>
			</div>
			<a
				href="https://github.com/15jgme/jgme-io"
				class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 hover:from-purple-300 hover:to-pink-500 transition-all"
				>View source code on github</a
			>
			<p>
				My first real adventure in anything web related (aside from flutter-web), certainly wont be
				my last!
			</p>
		</div>
	</body>
</div>
