<script lang="ts">
	import sacup_launch from '$lib/assets/images/SAcup2019.mp4';
	import type { experienceInterface } from '$lib/components/cardInterface';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import { redirect } from '@sveltejs/kit';
</script>

<div class="text-sm md:text-base font-mono md:p-5 transition-all px-1">
	<title>Work experience</title>
	<body
		><div class="flex flex-col w-full border-opacity-50">
			<h2 class="font-extrabold text-2xl md:text-3xl ">My experience</h2>
			<p class="pt-5">
				I recently finished my Master's at McGill in Mechanical Engineering in the Aerospace
				Mechatronics Lab and am currently working as a software developer at CAE with a focus on
				aircraft dynamic modeling for simulators.
			</p>

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
							{ name: 'Dart', redirect: '/projects/software_development' },
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
							{ name: 'Flutter', redirect: '/projects/software_development' },
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
						dates: 'July 2022 - Present',
						description: 'Specialization in flight dynamics modeling for flight simulators.',
						skills: ['C/C++', 'Python', 'Flight dynamics']
					}}
				/>
				<ExperienceCard
					data={{
						company: 'McGill',
						role: 'Graduate researcher',
						dates: 'September 2020 - July 2022',
						description:
							'Investigating wind rejection methods to improve the performance of lightweight autonomous fixed-wing UAVs. Developed a model-based approach to estimate wind from a sensor placed in the wake of a propeller, and a feedforward control method to improve the performance of a UAV in windy conditions using this estimate.',
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
						description:
							'Thesis: Wind Sensing and Rejection for Agile Fixed-Wing Unmanned Aerial Vehicles'
					}}
				/>
				<ExperienceCard
					data={{
						company: 'B.ASc. Mechanical Engineering',
						role: "Queen's University",
						dates: 'September 2016 - May 2020, GPA: 3.7',
						description: "President of the Queen's Rocket Engineering Team (QRET)."
					}}
				>
					<div class="flex flex-col">
						<video autoplay loop class="" muted>
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
