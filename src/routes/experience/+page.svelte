<script lang="ts">
	import sacup_launch from '$lib/assets/images/SAcup2019.mp4';
	import type { experienceInterface } from '$lib/components/cardInterface';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import { redirect } from '@sveltejs/kit';
</script>

<div class="text-sm md:text-base font-mono p-5 transition-all">
	<title>Work experience</title>
	<body
		><div class="flex flex-col w-full border-opacity-50">
			<h2 class="font-extrabold text-2xl md:text-3xl ">My experience</h2>
			<p class="pt-0">
				I'm a mechanical engineering graduate with a focus on robotics, autonomous systems, and
				aerospace. My masters research focused on UAVs where I studied wind disturbance rejection
				and sensing for agile autonomous fixed-wing aircraft. Afterwards, I moved into flight
				dynamics software development for aircraft simulation.
			</p>
			<div class="text-center">
				<a class="btn btn-primary btn-md" href="pdf/JacksonEmpeyResume.pdf">My resume</a>
			</div>
			<div class="divider">Skills</div>
			<div class="grid card bg-base-100 rounded-box place-items-center space-y-2">
				<SkillCard
					data={{
						catagory: 'Programming',
						experiencedSkills: [
							{ name: 'C/C++', redirect: '/projects/software_development' },
							{ name: 'Python', redirect: '/projects/software_development' },
							{ name: 'LaTeX' }
						],
						intermediateSkills: [
							{ name: 'Go', redirect: '/projects/software_development' },
							{ name: 'Javascript', redirect: '/projects/software_development' },
							{ name: 'Dart' },
							{ name: 'Java' },
							{ name: 'ANSYS APDL' }
						]
					}}
				/>
				<SkillCard
					data={{
						catagory: 'Tools, Platforms, and Frameworks',
						experiencedSkills: [
							{ name: 'ROS', redirect: '/projects/robotics' },
							{ name: 'PX4', redirect: '/projects/robotics' },
							{ name: 'Simulink', redirect: '/projects/robotics' },
							{ name: 'Linux', redirect: '/projects/robotics' },
							{ name: 'PlatformIO', redirect: '/projects/software_development' },
							{ name: 'Flutter' },
							{ name: 'Svelte', redirect: '/projects/software_development' },
							{ name: 'OpenFOAM' },
							{ name: 'Git' }
						]
					}}
				/>
				<SkillCard
					data={{
						catagory: 'Design and manufacture',
						experiencedSkills: [
							{ name: 'SolidWorks' },
							{ name: 'KiCad', redirect: '/projects/mechatronics' },
							{ name: 'Composite manufacturing' }
						]
					}}
				/>
			</div>
			<div class="divider">Work</div>
			<div class="grid card bg-base-100 rounded-box place-items-center space-y-2">
				<ExperienceCard
					data={{
						company: 'CAE',
						role: 'Software Developer',
						dates: 'July 2022 - July 2023',
						description: [
							'Contributed to the development of new flight dynamics assets for a prototype full-flight simulator. Key contributions include: refining data-processing logic to extract valuable state from flight test data, coordination with other subsystems to ensure all performance systems worked together to accurately match flight test data, and, development on a Qualification Test Guide package for FAA certification',
							'Maintained aerodynamics simulation assets for legacy level-D full-flight simulator and supported FAA qualification for five simulators',
							'Maintained the aerodynamics codebase of a high-volume aircraft simulation product'
						],
						skills: ['C/C++', 'Python', 'Flight dynamics']
					}}
				/>
				<ExperienceCard
					data={{
						company: 'McGill',
						role: 'Graduate researcher',
						dates: 'September 2020 - November 2022',
						description: [
							'Researched and developed wind rejection strategies for agile fixed-wing UAVs',
							'Developed an online estimator to address challenges related to propeller flow interference in airspeed measurements, enabling wind estimation on UAV platforms with sensor placement restrictions',
							'Designed a feedforward controller to substantially improve position-tracking performance of agile fixed-wing UAVs in windy conditions',
							'Implemented controller and estimator on flight hardware in C++ using the PX4 flight-stack',
							'Demonstrated controller and estimator performance through flight tests and simulation',
							'Published and presented two papers at the International Conference on Unmanned Aerial Systems (ICUAS) 2022 held in Dubrovnik'
						],
						skills: ['PX4', 'ROS', 'C/C++', 'Control systems', 'MATLAB/Simulink']
					}}
				/>
				<a
					class="btn"
					href="https://www.linkedin.com/in/jackson-empey-693377136/details/experience/"
					target="”_blank”">See more on LinkedIn</a
				>
			</div>
			<div class="divider">Education</div>
			<div class="grid card bg-base-100 rounded-box place-items-center space-y-2">
				<ExperienceCard
					data={{
						company: 'M.Sc. Mechanical Engineering',
						role: 'McGill University',
						dates: 'September 2020 - July 2022, GPA: 3.94',
						description: [
							'Thesis: Wind Sensing and Rejection for Agile Fixed-Wing Unmanned Aerial Vehicles'
						]
					}}
				/>
				<ExperienceCard
					data={{
						company: 'B.ASc. Mechanical Engineering',
						role: "Queen's University",
						dates: 'September 2016 - May 2020, GPA: 3.7',
						description: ["President of the Queen's Rocket Engineering Team (QRET)."]
					}}
				>
					<div class="flex flex-col">
						<video autoplay playsinline loop class="" muted>
							<source src={sacup_launch} type="video/mp4" />
						</video>
						<caption class="italic"
							>QRET's launch at the 2019 Spaceport America Cup, the rocket traveled over mach 1 and
							reached 24,000ft.
						</caption>
					</div>
					<div class="divider" />
					<p>Co-Founder/CTO of the Queen's BioMechatronics Team.</p>
					<p>A design team focusing on strength amplifying exoskeleton projects</p>
				</ExperienceCard>
			</div>
		</div>
	</body>
</div>
