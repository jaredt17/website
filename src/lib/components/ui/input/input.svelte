<script lang="ts">
  import { cn } from "$lib/utils.js";

  let {
    class: className = "",
    type = "text",
    value = $bindable(""),
    placeholder = "",
    required = false,
    disabled = false,
    id,
    ...restProps
  }: {
    class?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    [key: string]: unknown;
  } = $props();
</script>

<input
  {type}
  {id}
  {placeholder}
  {required}
  {disabled}
  bind:value
  class={cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  {...restProps}
/>
