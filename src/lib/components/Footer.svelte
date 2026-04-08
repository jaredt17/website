<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-card border-t border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="md:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-accent-brand/10 border border-accent-brand/20 flex items-center justify-center">
            <span class="text-accent-brand font-bold text-lg">TT</span>
          </div>
          <span class="text-xl font-semibold text-white">Teller Technologies</span>
        </div>
        <p class="text-muted-foreground max-w-md">
          Building tools for IT professionals — from network topology simulation to enterprise training and documentation.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
        <ul class="space-y-2">
          <li><a href="/" class="text-muted-foreground hover:text-accent-brand transition-colors">Home</a></li>
          <li><a href="/about" class="text-muted-foreground hover:text-accent-brand transition-colors">About</a></li>
          <li><a href="/projects" class="text-muted-foreground hover:text-accent-brand transition-colors">Projects</a></li>
          <li><a href="/contact" class="text-muted-foreground hover:text-accent-brand transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
        <ul class="space-y-2">
          <li>
            <a href="https://tellertechnologies.io" class="text-muted-foreground hover:text-accent-brand transition-colors">
              tellertechnologies.io
            </a>
          </li>
          <li>
            <a href="mailto:contact@tellertechnologies.io" class="text-muted-foreground hover:text-accent-brand transition-colors">
              contact@tellertechnologies.io
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-muted-foreground text-sm">
        &copy; {currentYear} Teller Technologies LLC. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        <a href="/privacy" class="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
        <a href="/terms" class="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
