<script lang="ts">
	const serviceAreas = [
		{
			name: 'Training Platforms',
			tagline: 'Enterprise Learning Solutions',
			description: 'Custom-built training platforms that help organizations develop their teams. We create interactive learning experiences with hands-on labs, progress tracking, and certification preparation.',
			features: [
				'Interactive course delivery systems',
				'Virtual lab environments',
				'Progress tracking and analytics',
				'Certification preparation modules',
				'LMS integration capabilities'
			],
			icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
		},
		{
			name: 'Documentation Systems',
			tagline: 'Knowledge Management Platforms',
			description: 'Comprehensive documentation platforms that help organizations capture, organize, and share technical knowledge. We build systems that make information accessible and maintainable.',
			features: [
				'Technical documentation portals',
				'Knowledge base systems',
				'API documentation platforms',
				'Internal wiki solutions',
				'Search and discovery tools'
			],
			icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
		},
		{
			name: 'Custom Development',
			tagline: 'Tailored Solutions',
			description: 'Purpose-built software solutions tailored to your organization\'s unique needs. We work closely with you to understand requirements and deliver exactly what you need.',
			features: [
				'Requirements analysis',
				'Custom platform development',
				'System integrations',
				'Ongoing support & maintenance',
				'Training and handoff'
			],
			icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
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
	<title>Services | Teller Technologies</title>
	<meta name="description" content="We build training platforms and documentation systems for enterprise organizations." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				What We <span class="gradient-text">Build</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				We create training platforms and documentation systems for enterprise organizations.
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
