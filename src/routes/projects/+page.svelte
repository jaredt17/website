<script lang="ts">
  import { Layers, Monitor, Server, ExternalLink, Check, ArrowRight } from 'lucide-svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<svelte:head>
  <title>Projects | Teller Technologies</title>
  <meta name="description" content="Explore the products and tools built by Teller Technologies — from NetSandbox network simulation to enterprise IT training and documentation solutions." />
</svelte:head>

<!-- Hero Section -->
<section class="py-20 sm:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl">
      <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
        Our <span class="gradient-text">Projects</span>
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed">
        We build tools that help IT professionals learn, plan, and document. Here's what we're working on.
      </p>
    </div>
  </div>
</section>

<!-- NetSandbox — Flagship Product -->
<section class="pb-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="glass-card p-8 sm:p-10 relative overflow-hidden" style="box-shadow: 0 0 60px oklch(0.696 0.17 162.48 / 8%), 0 25px 50px oklch(0 0 0 / 30%);">
      <div class="absolute -top-20 -right-20 w-60 h-60 bg-accent-brand/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative grid lg:grid-cols-5 gap-10 items-center">
        <div class="lg:col-span-3">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-accent-brand/10 border border-accent-brand/20 flex items-center justify-center">
              <Layers class="w-6 h-6 text-accent-brand" />
            </div>
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold text-white">NetSandbox</h2>
              <Badge variant="outline" class="bg-green-500/10 border-green-500/20 text-green-400 mt-1">
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span>
                Available Now
              </Badge>
            </div>
          </div>

          <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
            A visual network topology builder for learning, certification prep, and documentation. Design networks in your browser, get instant validation feedback, and learn through guided lessons.
          </p>

          <ul class="space-y-3 mb-8">
            {#each [
              'Browser-based — no install, no VMs',
              'Guided lessons covering routing, switching, security & more',
              'Protocol simulation: OSPF, BGP, STP, ACLs, NAT',
              'Free tier available — upgrade when you need more'
            ] as feature}
              <li class="flex items-start gap-3 text-foreground">
                <Check class="w-5 h-5 text-accent-brand flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            {/each}
          </ul>

          <div class="flex flex-col sm:flex-row items-start gap-3">
            <a href="https://app.netsandbox.io" class="btn-primary inline-flex items-center gap-2">
              Try NetSandbox
              <ArrowRight class="w-4 h-4" />
            </a>
            <a href="https://netsandbox.io" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-accent-brand/30 transition-colors text-sm font-medium">
              Learn More
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="card p-6 bg-background">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span class="ml-3 text-muted-foreground font-pixel text-[0.7rem] tracking-wider">app.netsandbox.io</span>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-card rounded-lg">
                <span class="text-muted-foreground text-sm">Topologies</span>
                <span class="text-accent-brand font-mono text-sm">Design & Validate</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-card rounded-lg">
                <span class="text-muted-foreground text-sm">Protocols</span>
                <span class="text-green-400 font-mono text-sm">OSPF, BGP, STP</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-card rounded-lg">
                <span class="text-muted-foreground text-sm">Learning Paths</span>
                <span class="text-accent-brand font-mono text-sm">8 paths</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-card rounded-lg">
                <span class="text-muted-foreground text-sm">Price</span>
                <span class="text-green-400 font-mono text-sm">Free to start</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Coming Soon Products -->
<section class="pb-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <Separator class="glow-divider mb-16" />
    <h3 class="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-8">In Development</h3>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="card p-8 opacity-80">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Monitor class="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white">Training & Education Tools</h3>
            <Badge variant="secondary" class="bg-secondary text-muted-foreground mt-1">Coming Soon</Badge>
          </div>
        </div>
        <p class="text-sm text-muted-foreground mb-4">Enterprise IT training solutions</p>
        <p class="text-muted-foreground text-sm leading-relaxed">
          Web-based training with hands-on labs, certification prep, skills assessment, and reporting for enterprise IT organizations.
        </p>
      </div>

      <div class="card p-8 opacity-80">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Server class="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <h3 class="text-xl font-semibold text-white">IT Infrastructure Planning & Documentation</h3>
            <Badge variant="secondary" class="bg-secondary text-muted-foreground mt-1">Coming Soon</Badge>
          </div>
        </div>
        <p class="text-sm text-muted-foreground mb-4">Enterprise IT documentation tools</p>
        <p class="text-muted-foreground text-sm leading-relaxed">
          Purpose-built tools for infrastructure planning, documentation, configuration reference, and IT infrastructure mapping.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="pb-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Interested in What We're Building?</h2>
    <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
      Try NetSandbox for free, or get in touch to learn more about our upcoming tools.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="https://app.netsandbox.io" class="btn-primary inline-flex items-center gap-2">
        Try NetSandbox Free
        <ArrowRight class="w-4 h-4" />
      </a>
      <a href="/contact" class="btn-secondary inline-flex items-center gap-2">
        Get in Touch
      </a>
    </div>
  </div>
</section>
