"use client"

export default function Loader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center" role="status" aria-live="polite">
      <div className="loader-ring" aria-hidden="true" />
      <div className="mt-3 inline-flex items-center gap-2 loader-dots" aria-hidden>
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
      </div>
      <p className="mt-3 text-sm font-medium text-slate-900 dark:text-slate-100">{label}</p>
    </div>
  )
}
