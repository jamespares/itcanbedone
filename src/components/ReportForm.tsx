'use client'

import { useState } from 'react'

export default function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      organization: formData.get('organization'),
      department: formData.get('department'),
      description: formData.get('description'),
      isAnonymous: isAnonymous,
      contactEmail: formData.get('contactEmail'),
      contactPhone: formData.get('contactPhone'),
    }

    try {
      const response = await fetch('/api/submit-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Submission failed')
      
      // Clear form and show success message
      e.currentTarget.reset()
      alert('Report submitted successfully')
    } catch (error) {
      alert('Failed to submit report. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Organization Name*</span>
        </label>
        <input
          type="text"
          name="organization"
          required
          className="input input-bordered w-full"
          placeholder="e.g. NHS Trust, Local Council"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Department/Unit</span>
        </label>
        <input
          type="text"
          name="department"
          className="input input-bordered w-full"
          placeholder="e.g. Finance, Planning"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description of Incident*</span>
        </label>
        <textarea
          name="description"
          required
          className="textarea textarea-bordered h-32"
          placeholder="Please provide as much detail as possible about what you witnessed..."
        />
      </div>

      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            className="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
          <span className="label-text">I wish to remain anonymous</span>
        </label>
      </div>

      {!isAnonymous && (
        <div className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Email</span>
            </label>
            <input
              type="email"
              name="contactEmail"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact Phone</span>
            </label>
            <input
              type="tel"
              name="contactPhone"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Report'}
      </button>

      <p className="text-sm text-neutral/60">
        * Required fields
      </p>
    </form>
  )
} 