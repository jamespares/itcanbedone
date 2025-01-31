import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { Report, NetworkMember } from '@/types/database'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}

export type { Report, NetworkMember }

export async function saveReport(data: Omit<Report, 'id' | 'created_at'>) {
  const { data: report, error } = await createClient()
    .from('reports')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return report
}

export async function saveNetworkMember(data: Omit<NetworkMember, 'id' | 'created_at'>) {
  const { data: member, error } = await createClient()
    .from('network_members')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return member
}

export async function getReports(): Promise<Report[]> {
  const { data, error } = await createClient()
    .from('reports')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
