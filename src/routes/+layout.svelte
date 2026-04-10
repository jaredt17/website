<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Teller Technologies | Enterprise IT Training, Planning & Documentation Tools</title>
	<meta name="description" content="Teller Technologies builds web-based enterprise IT training, planning, infrastructure, and documentation tools for enterprise IT professionals and education organizations." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Nav />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
