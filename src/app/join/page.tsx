'use client'

import { useState } from 'react'

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      twitterHandle: formData.get('twitterHandle'),
    }

    try {
      const response = await fetch('/api/join-network', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit')
      }

      setSubmitted(true)
      e.currentTarget.reset()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit'
      alert(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="max-w-md w-full px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4 text-base-content">Thank You for Joining!</h1>
          <p className="mb-4 text-base-content">We will be in touch soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="max-w-md w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-base-content">Join Our Network</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base-content">Full Name*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered w-full bg-base-100 text-base-content"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base-content">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full bg-base-100 text-base-content"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base-content">X (Twitter) Handle</span>
            </label>
            <input
              type="text"
              name="twitterHandle"
              className="input input-bordered w-full bg-base-100 text-base-content"
              placeholder="@username"
            />
            <label className="label">
              <span className="label-text-alt text-base-content/80">
                Please provide either an email or X handle for contact
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full text-primary-content font-medium"
          >
            {isSubmitting ? 'Submitting...' : 'Join Network'}
          </button>
        </form>
      </div>
    </div>
  )
}
