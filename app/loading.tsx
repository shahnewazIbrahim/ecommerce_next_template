"use client"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-950/90 backdrop-blur">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-transparent border-l-slate-900 border-t-slate-900 dark:border-l-white dark:border-t-white" />
      <p className="mt-4 text-lg font-medium text-slate-900 dark:text-slate-100">Loading</p>
    </div>
  )
}
