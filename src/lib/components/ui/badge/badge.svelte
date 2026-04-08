<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { badgeVariants } from "./index.js";
  import type { Props } from "./index.js";

  let {
    class: className = "",
    variant = "default",
    children,
    ...restProps
  }: Props & {
    children?: import("svelte").Snippet;
  } = $props();
</script>

<div
  class={cn(badgeVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</div>
