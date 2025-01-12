import { NextResponse } from 'next/server'
import { saveReport } from '@/lib/sheets'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    await saveReport(data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting report:', error)
    return NextResponse.json(
      { error: 'Failed to submit report' },
      { status: 500 }
    )
  }
} 