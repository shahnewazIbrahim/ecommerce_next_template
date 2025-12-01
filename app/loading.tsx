"use client";

import Loader from "@/components/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-950/90 backdrop-blur">
      <Loader />
    </div>
  );
}
