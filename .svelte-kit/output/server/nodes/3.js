

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DFiv4JxO.js","_app/immutable/chunks/scheduler.Ch0H1XW6.js","_app/immutable/chunks/index.CT4Qbzw8.js"];
export const stylesheets = ["_app/immutable/assets/3.Dwe5cFii.css"];
export const fonts = [];
