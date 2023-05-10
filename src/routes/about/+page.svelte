<script>
	import headshot_cropped from '$lib/assets/images/headshot_cropped.jpg';
</script>

<div class="text-sm md:text-base font-mono p-5 transition-all">
	<title>About me</title>
	<body>
		<div class="flex flex-col w-full lg:flex-row">
			<div class="grid flex-grow w-1/2 md:h-auto card bg-base-300 rounded-box place-items-center">
				<div class="avatar p-3">
					<div class="rounded-full">
						<img src={headshot_cropped} alt="Headshot" />
					</div>
				</div>
			</div>
			<div class="divider lg:divider-horizontal" />
			<div class="grid flex-grow h-auto card bg-base-300 rounded-box place-items-start">
				<div class="p-3 ">
					<p class="">
						I'm currently living in Montreal after finishing my Master's, and working as a
						software developer contracted to CAE, my main work is on the dynamics models of the
						company's flight simulators.
					</p>
					<p class="">
						Outside of projects, I love to explore by cycling, fall lots as a bouldering novice 🧗, and cook (I'm waiting for the day when I can build an outdoor pizza oven)
					</p>
				</div>
			</div>
		</div>
		<!-- <div class="carousel w-full">
			<div id="slide1" class="carousel-item relative w-full">
			  <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
			  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide4" class="btn btn-circle">❮</a> 
				<a href="#slide2" class="btn btn-circle">❯</a>
			  </div>
			</div> 
			<div id="slide2" class="carousel-item relative w-full">
			  <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
			  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide1" class="btn btn-circle">❮</a> 
				<a href="#slide3" class="btn btn-circle">❯</a>
			  </div>
			</div> 
			<div id="slide3" class="carousel-item relative w-full">
			  <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
			  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide2" class="btn btn-circle">❮</a> 
				<a href="#slide4" class="btn btn-circle">❯</a>
			  </div>
			</div> 
			<div id="slide4" class="carousel-item relative w-full">
			  <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
			  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide3" class="btn btn-circle">❮</a> 
				<a href="#slide1" class="btn btn-circle">❯</a>
			  </div>
			</div>
		  </div> -->
	</body>
</div>
