import { NextResponse } from 'next/server'
import { saveNetworkMember } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Basic validation for required fields
    if (!data.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    // Ensure at least one contact method is provided
    if (!data.email && !data.twitterHandle) {
      return NextResponse.json(
        { error: 'Please provide either an email address or X handle' },
        { status: 400 }
      )
    }

    // Format data to match table structure
    const memberData = {
      name: data.name,
      email: data.email || null,
      twitter_handle: data.twitterHandle || null,
    }

    const member = await saveNetworkMember(memberData)
    return NextResponse.json({ success: true, member })
  } catch (error) {
    console.error('Error joining network:', error)
    return NextResponse.json({ error: 'Failed to join network' }, { status: 500 })
  }
}
