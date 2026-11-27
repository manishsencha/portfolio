"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="clay rounded-[2rem] px-10 py-12 text-center">
        <p className="eyebrow">Off the map</p>
        <h1 className="mt-2 text-6xl font-extrabold">404</h1>
        <p className="mt-3 text-lg text-muted-foreground">This trail doesn&apos;t lead anywhere.</p>
        <Link href="/" className="clay-primary clay-press mt-6 inline-flex rounded-full px-5 py-2.5 font-semibold">
          Back to home
        </Link>
      </div>
    </div>
  );
}
