<script lang="ts">
	const serviceAreas = [
		{
			name: 'Training Platforms',
			tagline: 'Enterprise Learning Solutions',
			description: 'Custom-built training platforms designed for IT organizations. We create interactive learning experiences with hands-on labs, progress tracking, and certification preparation tools.',
			features: [
				'Interactive course delivery systems',
				'Virtual lab environments',
				'Progress tracking and analytics dashboards',
				'Certification exam preparation modules',
				'LMS integration capabilities'
			],
			icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
		},
		{
			name: 'IT Management Tools',
			tagline: 'Infrastructure & Operations Software',
			description: 'Purpose-built software tools that help IT teams manage their infrastructure more effectively. From monitoring dashboards to automation utilities, we build what your team needs.',
			features: [
				'Custom monitoring and alerting systems',
				'Infrastructure documentation tools',
				'Automation and orchestration utilities',
				'Asset management solutions',
				'Reporting and compliance tools'
			],
			icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
		},
		{
			name: 'Consulting Services',
			tagline: 'Strategic IT Guidance',
			description: 'Expert consulting for organizations looking to modernize their IT training programs or infrastructure. We help you plan, implement, and optimize.',
			features: [
				'Training program development',
				'Technology stack evaluation',
				'Infrastructure architecture review',
				'Process optimization',
				'Team capability assessments'
			],
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
		}
	];

	const technologies = [
		'SvelteKit',
		'TypeScript',
		'Python',
		'Go',
		'PostgreSQL',
		'Redis',
		'Docker',
		'Kubernetes',
		'AWS',
		'Azure'
	];
</script>

<svelte:head>
	<title>Projects & Services | Teller Technologies</title>
	<meta name="description" content="Explore the IT training platforms, tools, and services offered by Teller Technologies for enterprise organizations." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				What We <span class="gradient-text">Build</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				We create training platforms, IT management tools, and custom software solutions for enterprise organizations.
			</p>
		</div>
	</div>
</section>

<!-- Service Areas -->
{#each serviceAreas as service, i}
	<section class="py-16 {i % 2 === 0 ? 'bg-surface-800/50' : ''}">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12 items-center {i % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
				<div class="{i % 2 === 1 ? 'lg:order-2' : ''}">
					<div class="flex items-center gap-4 mb-4">
						<div class="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
							<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon} />
							</svg>
						</div>
						<h2 class="text-3xl font-bold text-white">{service.name}</h2>
					</div>
					<p class="text-lg text-primary-400 mb-4">{service.tagline}</p>
					<p class="text-gray-400 mb-8">{service.description}</p>

					<h3 class="text-lg font-semibold text-white mb-4">Capabilities</h3>
					<ul class="space-y-3 mb-8">
						{#each service.features as feature}
							<li class="flex items-start gap-3 text-gray-300">
								<svg class="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								{feature}
							</li>
						{/each}
					</ul>

					<a href="/contact" class="btn-primary inline-flex items-center gap-2">
						Discuss Your Project
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>

				<div class="{i % 2 === 1 ? 'lg:order-1' : ''}">
					<div class="card p-8 bg-surface-900">
						<div class="grid grid-cols-2 gap-4">
							{#each service.features.slice(0, 4) as feature, j}
								<div class="p-4 bg-surface-800 rounded-lg">
									<div class="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mb-3">
										<span class="text-primary-400 font-bold text-sm">{j + 1}</span>
									</div>
									<p class="text-gray-300 text-sm">{feature}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- Technologies Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
			<p class="text-gray-400 max-w-2xl mx-auto">
				We leverage modern, proven technologies to build reliable and scalable solutions.
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-4">
			{#each technologies as tech}
				<span class="px-4 py-2 rounded-lg bg-surface-700 text-gray-300 font-mono text-sm hover:bg-surface-600 transition-colors">
					{tech}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
		<p class="text-gray-400 mb-8 max-w-2xl mx-auto">
			Whether you need a training platform, custom IT tools, or expert consulting, we'd love to discuss how we can help.
		</p>
		<a href="/contact" class="btn-primary inline-flex items-center gap-2">
			Start a Conversation
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</section>
