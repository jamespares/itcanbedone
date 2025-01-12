import { NextResponse } from 'next/server'
import { saveReport } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const report = saveReport(data)
    return NextResponse.json({ success: true, report })
  } catch (error) {
    console.error('Error submitting report:', error)
    return NextResponse.json(
      { error: 'Failed to submit report' },
      { status: 500 }
    )
  }
} 