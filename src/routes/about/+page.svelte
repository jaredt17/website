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

<!-- Expertise Section -->
<section class="py-20 bg-surface-800/50">
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
