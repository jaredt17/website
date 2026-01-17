<script lang="ts">
	const projects = [
		{
			name: 'NetArch',
			tagline: 'Network Architecture Platform',
			status: 'In Development',
			statusColor: 'accent',
			description: 'A comprehensive platform for designing, visualizing, and documenting network architectures. Built for network engineers who demand professional-grade tooling.',
			features: [
				'Visual topology designer with drag-and-drop interface',
				'Automated documentation generation',
				'Configuration templates and best practices',
				'Version control and collaboration',
				'Export to multiple formats (PDF, Visio, PNG)'
			],
			tech: ['SvelteKit', 'TypeScript', 'Canvas API', 'PostgreSQL'],
			link: '#'
		}
	];

	const upcomingProjects = [
		{
			name: 'Network Training Platform',
			description: 'Interactive labs and courses for network professionals seeking certifications and skill development.',
			icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
		},
		{
			name: 'Infrastructure Monitoring Suite',
			description: 'Real-time monitoring and alerting for enterprise network infrastructure with intelligent anomaly detection.',
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
		},
		{
			name: 'Config Automation CLI',
			description: 'Command-line tool for automating network device configuration across multi-vendor environments.',
			icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
		}
	];
</script>

<svelte:head>
	<title>Projects | Teller Technologies</title>
	<meta name="description" content="Explore the projects and tools being built by Teller Technologies for enterprise IT and network professionals." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				Our <span class="gradient-text">Projects</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				We're building tools that solve real problems for network professionals and enterprise IT teams.
			</p>
		</div>
	</div>
</section>

<!-- Featured Project -->
{#each projects as project}
	<section class="py-16 bg-surface-800/50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12">
				<div>
					<div class="flex items-center gap-3 mb-4">
						<h2 class="text-3xl font-bold text-white">{project.name}</h2>
						<span class="px-3 py-1 rounded-full bg-{project.statusColor}-500/10 border border-{project.statusColor}-500/20 text-{project.statusColor}-400 text-sm font-medium">
							{project.status}
						</span>
					</div>
					<p class="text-lg text-primary-400 mb-4">{project.tagline}</p>
					<p class="text-gray-400 mb-8">{project.description}</p>

					<h3 class="text-lg font-semibold text-white mb-4">Key Features</h3>
					<ul class="space-y-3 mb-8">
						{#each project.features as feature}
							<li class="flex items-start gap-3 text-gray-300">
								<svg class="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								{feature}
							</li>
						{/each}
					</ul>

					<div class="mb-8">
						<h3 class="text-lg font-semibold text-white mb-3">Tech Stack</h3>
						<div class="flex flex-wrap gap-2">
							{#each project.tech as tech}
								<span class="px-3 py-1 rounded-lg bg-surface-700 text-gray-300 text-sm font-mono">
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<div class="flex gap-4">
						<a href="/contact" class="btn-primary inline-flex items-center gap-2">
							Request Early Access
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</a>
					</div>
				</div>

				<!-- Project Preview -->
				<div class="relative">
					<div class="card p-6 bg-surface-900">
						<div class="flex items-center gap-2 mb-4">
							<div class="w-3 h-3 rounded-full bg-red-500"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div class="w-3 h-3 rounded-full bg-green-500"></div>
							<span class="ml-4 text-gray-500 text-sm font-mono">netarch-cli v0.1.0</span>
						</div>
						<div class="font-mono text-sm space-y-2 text-gray-400">
							<p class="text-gray-500">$ netarch init --name "datacenter-west"</p>
							<p class="text-accent-400">Initializing new project...</p>
							<p>  Created: datacenter-west/</p>
							<p>  Created: datacenter-west/topology.yaml</p>
							<p>  Created: datacenter-west/devices/</p>
							<p class="text-green-400">Project initialized successfully.</p>
							<p class="text-gray-500 mt-4">$ netarch add switch --model "Cisco Nexus 9300"</p>
							<p class="text-accent-400">Adding device to topology...</p>
							<p>  Name: core-sw-01</p>
							<p>  Type: Layer 3 Switch</p>
							<p>  Ports: 48x 10GbE, 6x 100GbE</p>
							<p class="text-green-400">Device added to topology.</p>
							<p class="text-gray-500 mt-4">$ netarch diagram --output png</p>
							<p class="text-accent-400">Generating topology diagram...</p>
							<p class="text-green-400">Saved: datacenter-west/diagrams/topology.png</p>
						</div>
					</div>
					<div class="absolute -z-10 inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"></div>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- Upcoming Projects -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Coming Soon</h2>
			<p class="text-gray-400 max-w-2xl mx-auto">
				More tools and platforms in our pipeline to help enterprise IT teams work more efficiently.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each upcomingProjects as project}
				<div class="card p-8 hover:border-primary-500/50 transition-colors group">
					<div class="w-12 h-12 rounded-lg bg-surface-700 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
						<svg class="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={project.icon} />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-white mb-3">{project.name}</h3>
					<p class="text-gray-400">{project.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">Interested in Our Projects?</h2>
		<p class="text-gray-400 mb-8 max-w-2xl mx-auto">
			We're looking for beta testers and early adopters. Get in touch to learn more or request early access.
		</p>
		<a href="/contact" class="btn-primary inline-flex items-center gap-2">
			Contact Us
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</section>
