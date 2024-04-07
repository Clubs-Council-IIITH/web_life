import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".calendar.svelte-1ctg67c{width:100%;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container h-full w-full mx-auto flex justify-center items-center flex-col" data-svelte-h="svelte-fhx637"><div class="text-center flex flex-col items-center"><h2 class="h2">Events</h2></div> <div id="calendar" class="calendar svelte-1ctg67c"></div> </div>`;
});
export {
  Page as default
};
