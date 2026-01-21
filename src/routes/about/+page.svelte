<script lang="ts">
	const values = [
		{
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
			title: 'Reliability First',
			description: 'We build solutions that IT enterprises can depend on, with a focus on uptime, redundancy, and resilience.'
		},
		{
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			title: 'Innovation Driven',
			description: 'Constantly exploring new technologies and methodologies to solve complex infrastructure challenges.'
		},
		{
			icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
			title: 'Knowledge Sharing',
			description: 'Committed to elevating the industry through training, documentation, and open-source contributions.'
		}
	];

	const expertise = [
		'Training platform development',
		'Enterprise IT tools & dashboards',
		'Learning management systems (LMS)',
		'Modern web technologies',
		'IT Enterprise architecture'
	];

	const industries = [
		{ name: 'Enterprise IT', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
		{ name: 'Higher Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
		{ name: 'K-12 Education', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
		{ name: 'Managed Service Providers', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' }
	];
</script>

<svelte:head>
	<title>About | Teller Technologies</title>
	<meta name="description" content="Learn about Teller Technologies - our mission, values, and expertise in enterprise IT solutions." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				Building the Future of
				<span class="gradient-text">IT Enterprise</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				Teller Technologies builds training platforms and IT tools that help organizations develop their teams and streamline operations.
			</p>
		</div>
	</div>
</section>

<!-- Story Section -->
<section class="py-16 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-white mb-6">Our Story</h2>
				<div class="space-y-4 text-gray-400">
					<p>
						After years of working in enterprise IT environments, we saw a consistent pattern: organizations struggling to train and upskill their IT teams while lacking access to the right tools and platforms.
					</p>
					<p>
						Teller Technologies was born from the belief that enterprise-grade IT training and tooling shouldn't be gatekept. We're building platforms that make professional development accessible and effective.
					</p>
					<p>
						Our focus is on creating training solutions and IT management tools that are powerful, intuitive, and built by engineers who understand the real-world challenges of enterprise IT.
					</p>
				</div>
			</div>
			<div class="relative">
				<div class="card p-8">
					<div class="space-y-6">
						<div class="flex items-center gap-4">
							<div class="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
								<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
							</div>
							<div>
								<div class="text-2xl font-bold text-white">Teller Technologies</div>
								<div class="text-gray-400">LLC</div>
							</div>
						</div>
						<div class="border-t border-surface-600 pt-6">
							<div class="text-sm text-gray-500 uppercase tracking-wider mb-2">Focus Areas</div>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">Enterprise IT</span>
								<span class="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">Training</span>
								<span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">Education</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Our Values</h2>
			<p class="text-gray-400 max-w-2xl mx-auto">
				The principles that guide everything we build and every partnership we form.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each values as value}
				<div class="card p-8 text-center">
					<div class="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={value.icon} />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-white mb-3">{value.title}</h3>
					<p class="text-gray-400">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Industries Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
			<p class="text-gray-400 max-w-2xl mx-auto">
				We partner with organizations across diverse sectors, bringing enterprise-grade solutions to industries that demand reliability and performance.
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-4">
			{#each industries as industry (industry.name)}
				<div class="card p-6 text-center hover:border-primary-500/50 transition-colors group w-40 sm:w-48">
					<div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
						<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={industry.icon} />
						</svg>
					</div>
					<h3 class="text-sm font-medium text-white">{industry.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Expertise Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-white mb-6">Technical Expertise</h2>
				<p class="text-gray-400 mb-8">
					Our team brings deep experience building platforms for enterprise IT organizations.
				</p>
				<ul class="space-y-4">
					{#each expertise as item}
						<li class="flex items-center gap-3 text-gray-300">
							<svg class="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							{item}
						</li>
					{/each}
				</ul>
			</div>
			<div class="grid grid-cols-1 gap-4">
				<div class="card p-6 text-center">
					<div class="text-3xl font-bold gradient-text mb-2">7+</div>
					<div class="text-gray-400 text-sm">Years IT Experience</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Want to Work Together?</h2>
		<p class="text-gray-400 mb-8 max-w-2xl mx-auto">
			Whether you need help with a complex IT project or want to discuss training for your team, we'd love to hear from you.
		</p>
		<a href="/contact" class="btn-primary inline-flex items-center gap-2">
			Get in Touch
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</section>
