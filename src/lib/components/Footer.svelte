<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-surface-800 border-t border-surface-700">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Brand -->
			<div class="md:col-span-2">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
						<span class="text-white font-bold text-xl">T</span>
					</div>
					<span class="text-xl font-semibold text-white">Teller Technologies</span>
				</div>
				<p class="text-gray-400 max-w-md">
					Building innovative solutions for enterprise IT infrastructure. We help organizations modernize their technology stack.
				</p>
			</div>

			<!-- Links -->
			<div>
				<h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
					<li><a href="/about" class="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
					<li><a href="/projects" class="text-gray-400 hover:text-primary-400 transition-colors">Projects</a></li>
					<li><a href="/contact" class="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
				<ul class="space-y-2">
					<li>
						<a href="https://tellertechnologies.io" class="text-gray-400 hover:text-primary-400 transition-colors">
							tellertechnologies.io
						</a>
					</li>
					<li>
						<a href="mailto:contact@tellertechnologies.io" class="text-gray-400 hover:text-primary-400 transition-colors">
							contact@tellertechnologies.io
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 pt-8 border-t border-surface-700 flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-gray-500 text-sm">
				&copy; {currentYear} Teller Technologies LLC. All rights reserved.
			</p>
			<div class="flex items-center gap-6">
				<a href="/privacy" class="text-gray-500 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
				<a href="/terms" class="text-gray-500 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
