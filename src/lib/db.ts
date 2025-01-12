import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const DB_PATH = path.join(process.cwd(), 'data', 'reports.json')

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(DB_PATH))) {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })
}

// Initialize empty database if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify({ reports: [] }))
}

export type Report = {
  id: string
  organization: string
  department?: string
  description: string
  isAnonymous: boolean
  contactEmail?: string
  contactPhone?: string
  submittedAt: string
}

export function saveReport(reportData: Omit<Report, 'id' | 'submittedAt'>) {
  const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'))
  
  const report: Report = {
    ...reportData,
    id: uuidv4(),
    submittedAt: new Date().toISOString(),
  }

  db.reports.push(report)
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2))
  return report
}

export function getReports(): Report[] {
  const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'))
  return db.reports
} 