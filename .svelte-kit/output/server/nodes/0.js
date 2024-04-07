import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C_kMYo4M.js","_app/immutable/chunks/scheduler.Ch0H1XW6.js","_app/immutable/chunks/index.CT4Qbzw8.js","_app/immutable/chunks/paths.C8Yhukzv.js","_app/immutable/chunks/index.D9h4qvIo.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.DfM2jt22.js"];
export const stylesheets = ["_app/immutable/assets/0.Br_giweD.css","_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];
