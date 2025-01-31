import { NextResponse } from 'next/server'
import { saveReport } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Basic validation for required fields
    if (!data.organization) {
      return NextResponse.json({ error: 'Organization name is required' }, { status: 400 })
    }

    if (!data.description) {
      return NextResponse.json({ error: 'Description is required' }, { status: 400 })
    }

    // Format data to match table structure
    const reportData = {
      organization: data.organization,
      department: data.department || null,
      description: data.description,
      is_anonymous: Boolean(data.isAnonymous),
      contact_email: data.isAnonymous ? null : data.contactEmail || null,
    }

    const report = await saveReport(reportData)
    return NextResponse.json({ success: true, report })
  } catch (error) {
    console.error('Error submitting report:', error)
    return NextResponse.json({ error: 'Failed to submit report' }, { status: 500 })
  }
}
