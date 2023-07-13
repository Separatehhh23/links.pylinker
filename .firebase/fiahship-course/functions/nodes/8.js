import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.1a460355.js","_app/immutable/chunks/scheduler.3a282fb1.js","_app/immutable/chunks/index.d2fb1536.js","_app/immutable/chunks/stores.1e32dadd.js","_app/immutable/chunks/singletons.d9d98a18.js","_app/immutable/chunks/index.3e2485af.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
