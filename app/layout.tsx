import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://manishsencha.dev"),
  title: "Portfolio | Manish Sencha",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
