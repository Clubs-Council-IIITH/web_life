

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DZ9PqnF6.js","_app/immutable/chunks/scheduler.Ch0H1XW6.js","_app/immutable/chunks/index.CT4Qbzw8.js","_app/immutable/chunks/each.C5jJoVFb.js","_app/immutable/chunks/paths.C8Yhukzv.js"];
export const stylesheets = ["_app/immutable/assets/2.CmHAf3Wb.css"];
export const fonts = [];
