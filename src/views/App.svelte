<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import Welcome from '../components/Welcome.svelte';
</script>

{#if !$isLoading}
  <Welcome />
{/if}
