export { renderers } from '../renderers.mjs';

const page = () => import('./pages/clubs_CNUrUosc.mjs').then(n => n.c);

export { page };
