<script>
	import eperpeparaImg from "$lib/assets/images/robotics/eperpepara.drawio.png?w=300&h=400&webp";
	import fiveMsCircleImg from "$lib/assets/images/robotics/circle5mswind.png?w=300&h=400&webp";
	import ataSlipMeasureImg from "$lib/assets/images/robotics/ata_slip_measure.png?w=300&h=400&webp";
	import ataSlipMomImg from "$lib/assets/images/robotics/atamom.png?w=300&h=400&webp";
	import icuasGif from "$lib/assets/images/robotics/icuasuav.gif";
	import icuasTeamImg from "$lib/assets/images/robotics/icuasTeam.jpg?w=300&h=400&webp";
	import NavigationBar from "$lib/components/navigationBar.svelte";
</script>

<div class="font-mono p-5 transition-all">
	<title>Robotics Projects</title>
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
					d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
				/>
			</svg>
			<h2 class="font-extrabold text-3xl inline">Robotics projects</h2>
		</div>
		<div>
			<div class="pt-4">
				<h3 class="font-extrabold text-2xl inline">
					Wind sensing and rejection for agile fixed-wing aircraft
				</h3>
				<p>
					This was my master's research as part of the Aerospace Mechatronics Lab, with the goal of
					reducing wind disturbances on ultralight agile aircraft flying outdoors. These aircraft
					are too small to have sophisticated wind sensing equipment, which added to the challenge
					of wind rejection. The research was split into three parts, first we validated an agile
					fixed-wing propeller slipstream model in flight using sensors at different locations in
					the slipstream, then we constructed a modular estimator to estimate wind even with
					airspeed measurements contaminated by slipstream, finally a multi-part feedforward
					controller was designed to minimize wind disturbances using the estimator. My work was
					very experiment focused to everything was tested in real-world flight conditions, so I'm
					no stranger to doing work in field and running outdoor experiments in a few feet of snow!
				</p>
				<div class="flex space-x-2">
					<p class="font-bold ">Skills:</p>
					<p class="italic ">robotics, control theory, estimation, aerodynamic modeling</p>
					<p class="font-bold ">Technologies:</p>
					<p class="italic ">PX4, Gazebo, MATLAB</p>
				</div>
				<div class="">
					<figure class="">
						<div class="flex">
							<img
								src={eperpeparaImg}
								alt="Error definitions for feedforward wind rejection controller"
								class="object-cover h-90 w-96 p-2"
							/>
							<img
								src={fiveMsCircleImg}
								alt="Simulated controller performance"
								class="object-cover h-90 w-[550px] p-2"
							/>
						</div>

						<figcaption class="italic">
							Error definitions used in controller(left) and simulated wind rejection performance
							(right)
						</figcaption>
					</figure>
				</div>
				<p class="pt-4">
					We also investigated an interesting research offshoot which was only briefly covered in my
					thesis. Since my researched involved using an airspeed sensor near the aircraft's control
					surfaces, we also studied how we can use this measurement as part of the control
					allocation problem. Further study is needed, but preliminary results showed much improved
					attitude control during acrobatic maneuvers when using direct slipstream measurement for
					control allocation. The figures below are animated datasets taken from real flight tests.
				</p>
				<div class="">
					<figure class="">
						<div class="flex">
							<img
								src={ataSlipMeasureImg}
								alt="Simulated controller performance"
								class="object-cover h-90 w-96 p-2"
							/>
							<img
								src={ataSlipMomImg}
								alt="Aerobatic maneuver without slipstream measurement"
								class="object-cover h-90 w-96 p-2"
							/>
						</div>

						<figcaption class="italic">
							Aerobatic maneuver with slipstream measurement (left), and without slipstream
							measurement (right)
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
		<div class="pt-4">
			<h3 class="font-extrabold text-2xl inline">
				UAV competition, ICUAS 2022 (2nd place out of 50 teams)
			</h3>
			<p>
				The objective of the International Conference on Unmanned Aerial Systems (ICUAS) UAV
				competition, was to autonomously navigate through an obstacle field, search for an AR tag in
				an unknown location, and compute and execute a launch trajectory to land a payload on the AR
				tag. I participated as part of McGill Aerospace Mechatronics Lab (AML) team. The first phase
				of the competition was simulation based, where we worked with ROS and Gazebo to submit a
				solution to challenge which was tested by the organizers on a random obstacle course. Once
				we made it to the second phase of the competition, we (alongside the other top-5 teams)
				shifted our focus to performing the challenge on a real UAV in-person at ICUAS 2022 in
				Dubrovnik.
			</p>
			<p>
				As the competition was student focused and organized by a research conference, our
				competitors primarily consisted of graduate robotics labs from other universities. We ended
				up placing 2nd out of over 50 registered teams.
			</p>
			<p>
				On the team my main contributions were the tag detection system, including an Kalman filter
				to better estimate tag position, and the path-planning node which used A* to compute a safe
				path to the objective on-line.
			</p>
			<div class="flex space-x-2">
				<p class="font-bold ">Skills:</p>
				<p class="italic ">A* path-planning, robotics, estimation</p>
				<p class="font-bold ">Technologies:</p>
				<p class="italic ">ROS, Gazebo, Python, C++, Docker</p>
			</div>
			<figure>
				<img
					src={icuasGif}
					alt="Autonomous ball launch attempt"
					class="object-cover h-90 w-96 p-2"
				/>
				<figcaption class="italic">100% autonomous tag detection and ball launch</figcaption>
			</figure>
			<figure>
				<img
					src={icuasTeamImg}
					alt="AML ICUS UAV team in Dubrovnik"
					class="object-cover h-90 w-96 p-2"
				/>
				<figcaption class="italic">AML ICUS UAV team in Dubrovnik (me on the right!)</figcaption>
			</figure>
		</div>
	</body>
</div>
