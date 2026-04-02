"use client"

import { useEffect } from "react"

/** Fires Meta Pixel Lead event on mount. Polls for fbq readiness (10s timeout). */
export function LeadEvent() {
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 50 // 200ms * 50 = 10s timeout
    const interval = setInterval(() => {
      attempts++
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead")
        clearInterval(interval)
      } else if (attempts >= maxAttempts) {
        clearInterval(interval)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [])
  return null
}
