<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		company: '',
		subject: '',
		message: ''
	});

	let formStatus = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		formStatus = 'sending';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.error || 'Failed to send message');
			}

			formStatus = 'success';
		} catch (err) {
			formStatus = 'error';
			errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
		}
	}

	const contactMethods = [
		{
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			title: 'Email',
			value: 'contact@tellertechnologies.io',
			href: 'mailto:contact@tellertechnologies.io'
		},
		{
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
			title: 'Website',
			value: 'tellertechnologies.io',
			href: 'https://tellertechnologies.io'
		}
	];
</script>

<svelte:head>
	<title>Contact | Teller Technologies</title>
	<meta name="description" content="Get in touch with Teller Technologies for enterprise IT solutions, educational applications, and training inquiries." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				Let's <span class="gradient-text">Connect</span>
			</h1>
			<p class="text-xl text-gray-400 leading-relaxed">
				Have a project in mind, need training for your team, or want to learn more about our solutions? We'd love to hear from you.
			</p>
		</div>
	</div>
</section>

<!-- Contact Form & Info -->
<section class="py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-3 gap-12">
			<!-- Contact Info -->
			<div class="lg:col-span-1">
				<h2 class="text-2xl font-bold text-white mb-6">Get in Touch</h2>
				<p class="text-gray-400 mb-8">
					Whether you're looking for IT consulting, training solutions, or want to discuss a project, we're here to help.
				</p>

				<div class="space-y-6">
					{#each contactMethods as method}
						<a href={method.href} class="flex items-start gap-4 group">
							<div class="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
								<svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={method.icon} />
								</svg>
							</div>
							<div>
								<div class="text-sm text-gray-500 uppercase tracking-wider">{method.title}</div>
								<div class="text-white group-hover:text-primary-400 transition-colors">{method.value}</div>
							</div>
						</a>
					{/each}
				</div>

				<div class="mt-12 p-6 card">
					<h3 class="text-lg font-semibold text-white mb-3">Response Time</h3>
					<p class="text-gray-400 text-sm">
						We typically respond within 24-48 business hours. For urgent matters, please indicate in your message.
					</p>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<div class="card p-8">
					{#if formStatus === 'success'}
						<div class="text-center py-12">
							<div class="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
								<svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
							<p class="text-gray-400 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
							<button onclick={() => { formStatus = 'idle'; formData = { name: '', email: '', company: '', subject: '', message: '' }; }} class="btn-secondary">
								Send Another Message
							</button>
						</div>
					{:else}
						{#if formStatus === 'error'}
							<div class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
								<p class="text-red-400">{errorMessage}</p>
							</div>
						{/if}
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid sm:grid-cols-2 gap-6">
								<div>
									<label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name *</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										required
										class="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email *</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										class="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							<div class="grid sm:grid-cols-2 gap-6">
								<div>
									<label for="company" class="block text-sm font-medium text-gray-300 mb-2">Company</label>
									<input
										type="text"
										id="company"
										bind:value={formData.company}
										class="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
										placeholder="Your company"
									/>
								</div>
								<div>
									<label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
									<select
										id="subject"
										bind:value={formData.subject}
										required
										class="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-600 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
									>
										<option value="">Select a topic</option>
										<option value="training">Training Platforms</option>
										<option value="tools">IT Management Tools</option>
										<option value="consulting">Consulting Services</option>
										<option value="partnership">Partnership</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>

							<div>
								<label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message *</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="6"
									class="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
									placeholder="Tell us about your project or inquiry..."
								></textarea>
							</div>

							<button
								type="submit"
								disabled={formStatus === 'sending'}
								class="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{#if formStatus === 'sending'}
									<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Sending...
								{:else}
									Send Message
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-surface-800/50">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

		<div class="space-y-4">
			<div class="card p-6">
				<h3 class="text-lg font-semibold text-white mb-2">What types of projects do you work on?</h3>
				<p class="text-gray-400">
					We specialize in IT training platforms, custom tools for IT teams, and consulting services. Our focus is on helping enterprise and education organizations build effective training programs and IT infrastructure.
				</p>
			</div>

			<div class="card p-6">
				<h3 class="text-lg font-semibold text-white mb-2">Do you build custom training platforms?</h3>
				<p class="text-gray-400">
					Yes, we create custom training solutions including interactive learning platforms, virtual lab environments, and LMS integrations tailored to your organization's needs.
				</p>
			</div>

			<div class="card p-6">
				<h3 class="text-lg font-semibold text-white mb-2">Do you offer remote training?</h3>
				<p class="text-gray-400">
					Yes, we offer both on-site and remote training options. Our remote programs include live instruction, hands-on labs, and comprehensive materials.
				</p>
			</div>
		</div>
	</div>
</section>
