"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useTransition } from "react"
import Loader from "@/components/loader"

export default function RouteLoader() {
  const [isPending] = useTransition()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isPending) {
      setVisible(true)
    } else {
      // small delay to avoid flicker for very quick navigations
      const t = setTimeout(() => setVisible(false), 120)
      return () => clearTimeout(t)
    }
  }, [isPending, pathname])

  // Show loader immediately on user click for same-origin internal links
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      try {
        const el = (e.target as HTMLElement)?.closest?.("a") as HTMLAnchorElement | null
        if (!el) return
        if (el.target === "_blank") return
        if (el.hasAttribute("download")) return
        if (!el.href) return
        const url = new URL(el.href)
        if (url.origin !== location.origin) return
        setVisible(true)
      } catch (err) {
        // ignore
      }
    }

    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-slate-950/90 backdrop-blur">
      <Loader />
    </div>
  )
}
