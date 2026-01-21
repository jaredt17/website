<script lang="ts">
	const features = [
		{
			icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
			title: 'Training Platforms',
			description: 'Custom-built learning platforms with interactive courses, hands-on labs, and certification preparation for IT teams.'
		},
		{
			icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
			title: 'Enterprise IT Tools',
			description: 'Purpose-built tools that help IT teams manage, monitor, and maintain their infrastructure effectively.'
		}
	];

	const stats = [
		{ value: '7+', label: 'Years IT Experience' }
	];

	const capabilities = [
		'Interactive learning platforms',
		'Infrastructure monitoring tools',
		'Hands-on lab environments',
		'IT management dashboards',
		'LMS integration',
		'Progress tracking & analytics'
	];
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden py-20 sm:py-32">
	<!-- Background gradient -->
	<div class="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-transparent"></div>
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
				IT Enterprise Training &
				<span class="gradient-text">Education Platforms</span>
			</h1>

			<p class="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
				We build custom training platforms and IT tools that help organizations develop their teams and streamline operations.
			</p>

			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a href="/projects" class="btn-primary inline-flex items-center gap-2">
					View Our Work
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
				<a href="/contact" class="btn-secondary">
					Get in Touch
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">What We Do</h2>
			<p class="text-gray-400 max-w-2xl mx-auto">
				Specialized expertise in enterprise IT, combining hands-on experience with innovative solutions.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			{#each features as feature}
				<div class="card p-8 hover:border-primary-500/50 transition-colors group">
					<div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
						<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-white mb-3">{feature.title}</h3>
					<p class="text-gray-400">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-center">
			{#each stats as stat}
				<div class="text-center">
					<div class="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
					<div class="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Training Platform Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
					Our Focus
				</div>
				<h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
					Training Platforms & IT Tools
				</h2>
				<p class="text-gray-400 mb-6 text-lg">
					We build platforms that help IT organizations train their teams and manage their infrastructure. From interactive learning systems to IT management dashboards, we create the tools that drive efficiency.
				</p>
				<ul class="space-y-3 mb-8">
					{#each capabilities as capability}
						<li class="flex items-center gap-3 text-gray-300">
							<svg class="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							{capability}
						</li>
					{/each}
				</ul>
				<a href="/contact" class="btn-primary inline-flex items-center gap-2">
					Discuss Your Needs
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
			</div>

			<div class="relative">
				<div class="card p-6 bg-surface-900">
					<!-- Mock dashboard interface -->
					<div class="flex items-center gap-2 mb-4">
						<div class="w-3 h-3 rounded-full bg-red-500"></div>
						<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
						<div class="w-3 h-3 rounded-full bg-green-500"></div>
						<span class="ml-4 text-gray-500 text-sm font-mono">training-dashboard</span>
					</div>
					<div class="space-y-4">
						<div class="flex items-center justify-between p-3 bg-surface-800 rounded-lg">
							<span class="text-gray-300">Active Learners</span>
							<span class="text-accent-400 font-mono">2,847</span>
						</div>
						<div class="flex items-center justify-between p-3 bg-surface-800 rounded-lg">
							<span class="text-gray-300">Courses Completed</span>
							<span class="text-green-400 font-mono">12,453</span>
						</div>
						<div class="flex items-center justify-between p-3 bg-surface-800 rounded-lg">
							<span class="text-gray-300">Lab Hours This Month</span>
							<span class="text-primary-400 font-mono">8,291</span>
						</div>
						<div class="flex items-center justify-between p-3 bg-surface-800 rounded-lg">
							<span class="text-gray-300">Certification Pass Rate</span>
							<span class="text-green-400 font-mono">94.2%</span>
						</div>
					</div>
				</div>
				<div class="absolute -z-10 inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"></div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="card p-12 text-center bg-gradient-to-r from-primary-900/50 to-accent-900/30 border-primary-500/30">
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
				Ready to Build Your Platform?
			</h2>
			<p class="text-gray-400 mb-8 max-w-2xl mx-auto">
				Whether you need a training platform, IT management tools, or custom solution, we're here to help bring your vision to life.
			</p>
			<a href="/contact" class="btn-primary inline-flex items-center gap-2">
				Start a Conversation
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>
