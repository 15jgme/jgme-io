<script>import NavigationBar from "$lib/components/navigationBar.svelte";</script>

<div class="font-mono p-5 text-gray-800 transition-all">
	<header>
		<NavigationBar omittedLink={'contact'}/>
	</header>
	<body
		><div class="flex-col flex">
			<h2 class="font-extrabold text-3xl ">Contact</h2>
			<p class="pt-5">I'm always happy to chat, and love talking to and learning from new people</p>
			<p>You can reach me at any of the following spaces below, whichever works best for you</p>
			<a
				href="mailto:jackson.empey@mail.mcgill.ca"
				class="py-2 px-4 w-4/12 text-gray-500 hover:text-gray-800 justify-start hover:scale-110 transition-all"
				>📬 jackson.empey@mail.mcgill.ca</a
			>
			<a
				href="https://www.linkedin.com/in/jackson-empey-693377136/"
				class="py-2 px-4 w-4/12 text-gray-500 hover:text-gray-800 justify-start hover:scale-110 transition-all"
				>💼 Linkedin
			</a>
			<a
				href="https://twitter.com/robots_n_rocket/"
				class="py-2 px-4 w-4/12 text-gray-500 hover:text-gray-800 justify-start hover:scale-110 transition-all"
				>🐦 @robots_n_rocket on twitter
			</a>
		</div>
	</body>
</div>
