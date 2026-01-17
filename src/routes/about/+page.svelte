<script lang="ts">
	const values = [
		{
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
			title: 'Reliability First',
			description: 'We build solutions that enterprises can depend on, with a focus on uptime, redundancy, and resilience.'
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
		'Cisco & Juniper network infrastructure',
		'Software-defined networking (SDN)',
		'Cloud networking (AWS, Azure, GCP)',
		'Network automation with Python/Ansible',
		'Security architecture & compliance',
		'High-availability & disaster recovery'
	];

	const industries = [
		{ name: 'Healthcare', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
		{ name: 'Financial Services', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
		{ name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
		{ name: 'Manufacturing', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
		{ name: 'Retail & E-Commerce', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
		{ name: 'Technology & SaaS', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
		{ name: 'Logistics & Transportation', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' },
		{ name: 'Energy & Utilities', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
		{ name: 'Media & Entertainment', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
		{ name: 'Professional Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
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
				<span class="gradient-text">Enterprise Networking</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				Teller Technologies was founded with a simple mission: to help organizations build, manage, and optimize their network infrastructure with confidence.
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
						After years of working in enterprise IT environments, we saw a consistent pattern: organizations struggling with the complexity of modern network infrastructure while lacking access to the right tools and training.
					</p>
					<p>
						Teller Technologies was born from the belief that enterprise-grade network solutions shouldn't be gatekept. We're building tools that make professional network architecture accessible, and training programs that elevate the entire industry.
					</p>
					<p>
						Our flagship project, NetArch, represents our vision of what network design tooling should be: powerful, intuitive, and built by engineers who understand the real-world challenges of enterprise IT.
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
								<span class="px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm">Network Architecture</span>
								<span class="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">Training</span>
								<span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">Software</span>
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
				We partner with organizations across diverse sectors, bringing enterprise-grade network solutions to industries that demand reliability and security.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
			{#each industries as industry (industry.name)}
				<div class="card p-6 text-center hover:border-primary-500/50 transition-colors group">
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
					Our team brings deep experience across the full spectrum of enterprise networking technologies.
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
			<div class="grid grid-cols-2 gap-4">
				<div class="card p-6 text-center">
					<div class="text-3xl font-bold gradient-text mb-2">CCNP</div>
					<div class="text-gray-400 text-sm">Certified</div>
				</div>
				<div class="card p-6 text-center">
					<div class="text-3xl font-bold gradient-text mb-2">AWS</div>
					<div class="text-gray-400 text-sm">Solutions Architect</div>
				</div>
				<div class="card p-6 text-center">
					<div class="text-3xl font-bold gradient-text mb-2">10+</div>
					<div class="text-gray-400 text-sm">Years Experience</div>
				</div>
				<div class="card p-6 text-center">
					<div class="text-3xl font-bold gradient-text mb-2">100%</div>
					<div class="text-gray-400 text-sm">Client Satisfaction</div>
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
			Whether you need help with a complex network project or want to discuss training for your team, we'd love to hear from you.
		</p>
		<a href="/contact" class="btn-primary inline-flex items-center gap-2">
			Get in Touch
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</section>
