<script lang="ts">
  import { cn } from "$lib/utils.js";

  let {
    class: className = "",
    value = $bindable(""),
    placeholder = "",
    required = false,
    disabled = false,
    rows = 3,
    id,
    ...restProps
  }: {
    class?: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
    id?: string;
    [key: string]: unknown;
  } = $props();
</script>

<textarea
  {id}
  {placeholder}
  {required}
  {disabled}
  {rows}
  bind:value
  class={cn(
    "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  {...restProps}
></textarea>
