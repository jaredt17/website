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

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-lg bg-accent-brand/10 border border-accent-brand/20 flex items-center justify-center">
          <span class="text-accent-brand font-bold text-lg">TT</span>
        </div>
        <span class="text-xl font-semibold text-white group-hover:text-accent-brand transition-colors">
          Teller Technologies
        </span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            class="text-sm font-medium transition-colors {isActive(link.href)
              ? 'text-accent-brand'
              : 'text-muted-foreground hover:text-foreground'}"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <button
        class="md:hidden p-2 text-muted-foreground hover:text-foreground"
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

  {#if mobileMenuOpen}
    <div class="md:hidden bg-card border-t border-border">
      <div class="px-4 py-4 space-y-2">
        {#each navLinks as link (link.href)}
          <a
            href={link.href}
            class="block px-4 py-2 rounded-lg text-sm font-medium transition-colors {isActive(link.href)
              ? 'bg-accent-brand/15 text-accent-brand'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}"
            onclick={() => (mobileMenuOpen = false)}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<div class="h-16"></div>
