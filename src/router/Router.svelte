<script lang="ts">
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  let routes: {
    [key: string]: any;
  } = {
    '/': wrap({
      asyncComponent: () => import('@/views/Index.svelte'),
    }),
  };
</script>

<Router {routes} />
