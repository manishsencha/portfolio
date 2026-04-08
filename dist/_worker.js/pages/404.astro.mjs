globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DG0ottg_.mjs';
import { $ as $$Layout } from '../chunks/Layout_CdsPpENo.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_NASU7dtQ.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen items-center justify-center bg-muted"> <div class="text-center"> <h1 class="mb-4 text-4xl font-bold">404</h1> <p class="mb-4 text-xl text-muted-foreground">Oops! Page not found</p> <a href="/" class="text-primary underline hover:text-primary/90">
Return to Home
</a> </div> </div> ` })} ${renderScript($$result, "/home/manish/projects/portfolio/src/pages/404.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manish/projects/portfolio/src/pages/404.astro", void 0);

const $$file = "/home/manish/projects/portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
