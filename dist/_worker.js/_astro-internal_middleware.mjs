globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_K2UvJFAr.mjs';
import './chunks/astro/server_DG0ottg_.mjs';
import { s as sequence } from './chunks/index_Dkzo57wD.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
