import { NextResponse } from 'next/server'
import { getReports } from '@/lib/sheets'

export async function GET(request: Request) {
  // Basic auth check
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const reports = await getReports()
    return NextResponse.json({ reports })
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    )
  }
} 