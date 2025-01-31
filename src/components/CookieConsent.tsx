'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral text-neutral-content p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Common Sense UK uses essential cookies to ensure the basic functionality of the Blow the
            Whistle platform. Read our{' '}
            <Link href="/privacy" className="link">
              Privacy Policy
            </Link>{' '}
            to learn more.
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={declineCookies} className="btn btn-outline btn-sm">
            Decline
          </button>
          <button onClick={acceptCookies} className="btn btn-primary btn-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
