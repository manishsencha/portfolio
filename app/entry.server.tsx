import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server.browser";
import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext
) {
  const stream = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        responseStatusCode = 500;
        console.error(error);
      },
    }
  );

  if (isbot(request.headers.get("user-agent") || "")) {
    await stream.allReady;
  }

  responseHeaders.set("Content-Type", "text/html; charset=utf-8");

  return new Response(stream, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
