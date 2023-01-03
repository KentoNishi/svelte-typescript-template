import './i18n/i18n';
import Index from './router/Router.svelte';

const app = new Index({
  target: document.getElementById('app'),
});

export default app;
