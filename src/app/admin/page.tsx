'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push('/admin/reports')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold mb-6">Admin Access</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter admin password"
                />
              </div>
              
              {error && (
                <p className="text-error text-sm">{error}</p>
              )}
              
              <button type="submit" className="btn btn-primary w-full">
                Access Reports
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 