<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { buttonVariants } from "./index.js";
  import type { Props } from "./index.js";

  let {
    class: className = "",
    variant = "default",
    size = "default",
    type = "button",
    disabled = false,
    onclick,
    children,
    ...restProps
  }: Props & {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: import("svelte").Snippet;
  } = $props();
</script>

<button
  {type}
  {disabled}
  {onclick}
  class={cn(buttonVariants({ variant, size }), className)}
  {...restProps}
>
  {@render children?.()}
</button>
