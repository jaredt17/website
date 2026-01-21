<script lang="ts">
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-surface-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
					<span class="text-white font-bold text-lg">TT</span>
				</div>
				<span class="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
					Teller Technologies
				</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="text-sm font-medium transition-colors {isActive(link.href)
							? 'text-primary-400'
							: 'text-gray-300 hover:text-white'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<button
				class="md:hidden p-2 text-gray-400 hover:text-white"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-surface-800 border-t border-surface-700">
			<div class="px-4 py-4 space-y-2">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="block px-4 py-2 rounded-lg text-sm font-medium transition-colors {isActive(link.href)
							? 'bg-primary-500/20 text-primary-400'
							: 'text-gray-300 hover:bg-surface-700 hover:text-white'}"
						onclick={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<!-- Spacer for fixed nav -->
<div class="h-16"></div>
