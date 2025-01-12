import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS!),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID!

export type Report = {
  id: string
  submittedAt: string
  organization: string
  department?: string
  description: string
  isAnonymous: boolean
  contactEmail?: string
}

export async function saveReport(data: Omit<Report, 'id' | 'submittedAt'>) {
  try {
    const row = [
      new Date().toISOString(),
      data.organization,
      data.department || '',
      data.description,
      data.isAnonymous ? 'Yes' : 'No',
      data.contactEmail || '',
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error)
    throw error
  }
}

export async function getReports(): Promise<Report[]> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:F',
    })

    const rows = response.data.values || []
    return rows.map((row, index) => ({
      id: index.toString(),
      submittedAt: row[0],
      organization: row[1],
      department: row[2] || undefined,
      description: row[3],
      isAnonymous: row[4] === 'Yes',
      contactEmail: row[5] || undefined,
    }))
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    throw error
  }
} 