import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    metadataBase: new URL("https://manishsencha.dev"),
    title: "Manish Sencha",
    description: "Full Stack Developer",
    openGraph: {
        title: "Manish Sencha",
        description: "Full Stack Developer",
        url: "https://manishsencha.dev",
        siteName: "Manish Sencha",
    }
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
        <SpeedInsights/>
        </body>
        </html>
    );
}
