<script lang="ts">
	import mcfoamyImg from '$lib/assets/images/mcfoamy.png?w=300&h=400&webp';
	import PublicationCard from '$lib/components/PublicationCard.svelte';
	import type { pubInterface } from '$lib/components/cardInterface';

	let icuas1: pubInterface = {
		title: 'Feedforward Control for Wind Rejection in Fixed-Wing UAVs',
		authors: 'Jackson Empey and Meyer Nahon',
		journal:
			'2022 International Conference on Unmanned Aircraft Systems (ICUAS), 2022, pp. 1185-1193, doi: 10.1109/ICUAS54217.2022.9836186.',
		abstract:
			'This paper presents a modular feedforward wind rejection method for agile fixed-wing UAVs, designed to work in tandem with a thrust pointing position controller. The feedforward controller requires a trustworthy wind estimate, and is based on three components, a feedforward rotation on attitude and two feedforward components on thrust. The controller uses attitude trim conditions to reject wind disturbances near the cross-wind condition, while also adopting an airspeed-based feedforward on thrust to reduce disturbances when flying in-line with the wind vector. The feedforward controller was validated in simulation and outdoor flight tests. Simulated flights consisted of straight line and circular tracking in a constant wind-field, as well as frequency tests to examine the ability of the feedforward controller to reject wind fluctuations. Experimental flight tests tracking a circular path in a windy environment were conduced. The results of simulations and experimental flights show that the feedforward controller provides good wind rejection performance when compared to the feedback position controller operating on its own.',
		url: 'https://ieeexplore.ieee.org/document/9836186',
		host: 'IEEEXplore'
	};

	let icuas2: pubInterface = {
		title: 'In-Flight Validation of Propeller Slipstream Model',
		authors: 'Jackson Empey and Meyer Nahon',
		journal:
			'2022 International Conference on Unmanned Aircraft Systems (ICUAS), 2022, pp. 802-811, doi: 10.1109/ICUAS54217.2022.9836217.',
		abstract:
			'This paper presents a semi-empirical propeller slipstream model capable of predicting flow velocities far downstream of the propeller in forward flight conditions. The model is an extension of a model developed for static conditions, to include an incoming freestream flow. The effect of the aircraft’s forward speed on the flow aft of the propeller is demonstrated and compared to that predicted by classical momentum theory. A small UAV platform is then instrumented to measure the slipstream flow at multiple locations behind the propeller. Tests were conducted in a level flight state with a constant propeller speed. In-flight measurements show that the semi-empirical model is significantly more accurate than classical momentum theory near the tail of the platform, with an RMS error of 0.7-2.0m/s. Measurements near the wing of the test platform at an axial location less than 2 propeller diameters downstream showed lower accuracy for both the semi-empirical and momentum theory models, possibly indicating strong unmodeled interference from the wing and ailerons or unknown effects of advancing flow conditions.',
		url: 'https://ieeexplore.ieee.org/document/9836217',
		host: 'IEEEXplore'
	};

	let thesis: pubInterface = {
		title: 'Wind sensing and rejection for agile fixed-wing unmanned aerial vehicles',
		authors: 'Jackson Empey',
		journal: 'M.Sc. thesis',
		abstract:
			'Agile fixed-wing unmanned aerial vehicles (UAVs) are an emerging class of autonomous aircraft that combine the efficient distance flight of conventional fixed-wings with the maneuverability, and ability to hover, of multi-rotor platforms. These characteristics make agile fixed-wings compelling candidates for a wide variety of missions from search and rescue to surveillance. The remarkable maneuverability of these platforms is largely due to their low weight, and powerful thrusters, which drive reliable and fast slipstream airflow over the control surfaces, keeping them effective during low-speed flight. While their low weight is critical to the agility of this class of UAV, it also makes them highly susceptible to wind and can present challenges for precision flight outdoors. The objective of this thesis is to reject wind disturbances on agile fixed-wing platforms while minimizing any reductions to the performance of the agile fixed-wing. To achieve this objective, a modular, feedforward, wind rejection controller, relying on a wind estimate, was developed to improve the performance of existing agile fixed-wing controllers in outdoor environments. To provide a wind estimate to this controller while maintaining the platform’s agility, only one additional sensor, an airspeed sensor placed near the platform’s body is required. Since this sensor location is impacted by propeller slipstream, a model-based approach to removing slipstream flow from airspeed measurements is used as part of a larger wind estimation architecture. Simulations and experimental flights were conducted to validate both the feedforward controller and model-based slipstream removal.',
		url: 'https://escholarship.mcgill.ca/concern/theses/kd17d0511/',
		host: 'McGill eScholarship'
	};
</script>

<div class="font-mono p-5 transition-all">
	<title>Publications</title>
	<body
		><h2 class="font-extrabold text-3xl ">Publications</h2>
		<p>
			My research at McGill's Aerospace Mechatronics Laboratory focused on aerial robotics. In
			particular, agile fixed wing aircraft and how to control them in windy conditions. My research
			led me to investigate control, estimation, and aerodynamic modeling problems for this highly
			interesting uncrewed aerial vehicle.
		</p>

		<div class="flex justify-center">
			<figure>
				<img src={mcfoamyImg} alt="Agile Fixed-Wing aircraft" class="object-cover h-90 w-96" />
				<figcaption class="italic">(Above) Agile Fixed-Wing Aircraft
					<p class="not-italic">Below is a summary of my publications from this project.</p>
				</figcaption>
			</figure>
			
		</div>
		<div class="flex justify-center py-3">
			<PublicationCard data={icuas1} />
		</div>
		<div class="flex justify-center py-3">
			<PublicationCard data={icuas2} />
		</div>
		<div class="flex justify-center py-3">
			<PublicationCard data={thesis} />
		</div>
	</body>
</div>
