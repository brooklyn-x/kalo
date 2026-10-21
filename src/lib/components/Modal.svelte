<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { X } from 'lucide-svelte';
  let {
    title,
    onclose,
    children,
  }: { title: string; onclose: () => void; children: Snippet } = $props();
  let dialog: HTMLDialogElement;
  const titleId = `modal-${crypto.randomUUID()}`;
  onMount(() => {
    dialog.showModal();
    return () => dialog.close();
  });
</script>

<dialog
  bind:this={dialog}
  class="modal"
  aria-labelledby={titleId}
  oncancel={(e) => {
    e.preventDefault();
    onclose();
  }}
  onclick={(e) => {
    if (e.target === dialog) onclose();
  }}
  onkeydown={() => {}}
>
  <div class="modal-body">
    <div class="modal-head">
      <h2 id={titleId}>{title}</h2>
      <button
        class="icon-btn"
        type="button"
        aria-label="Close dialog"
        onclick={onclose}><X size={18} /></button
      >
    </div>
    {@render children()}
  </div>
</dialog>
