import type { Config } from "@react-router/dev/config";

export default {
  // Use SSG by pre-rendering routes at build time
  appDirectory: "src",
  async prerender() {
    return ["/", "/not-found"];
  },
  ssr: true, // Required for pre-rendering
} satisfies Config;
