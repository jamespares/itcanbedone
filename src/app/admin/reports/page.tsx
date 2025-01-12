'use client'

import { useEffect, useState } from 'react'
import { Report } from '@/lib/db'

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('/api/reports')
        const data = await response.json()
        setReports(data.reports)
      } catch (error) {
        console.error('Failed to fetch reports:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Submitted Reports ({reports.length})</h1>
          <button 
            onClick={() => window.print()} 
            className="btn btn-outline"
          >
            Export to PDF
          </button>
        </div>

        <div className="space-y-6">
          {reports.map((report) => (
            <div key={report.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="card-title">{report.organization}</h2>
                    {report.department && (
                      <p className="text-sm opacity-70">{report.department}</p>
                    )}
                  </div>
                  <div className="text-right text-sm opacity-70">
                    <p>{new Date(report.submittedAt).toLocaleDateString()}</p>
                    <p>{report.isAnonymous ? 'Anonymous' : 'Contact Details Provided'}</p>
                  </div>
                </div>

                <div className="divider"></div>

                <p className="whitespace-pre-wrap">{report.description}</p>

                {!report.isAnonymous && (
                  <>
                    <div className="divider"></div>
                    <div className="text-sm">
                      {report.contactEmail && (
                        <p>Email: {report.contactEmail}</p>
                      )}
                      {report.contactPhone && (
                        <p>Phone: {report.contactPhone}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 