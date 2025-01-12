import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS!),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID!

export async function saveReport(data: {
  organization: string
  department?: string
  description: string
  isAnonymous: boolean
  contactEmail?: string
}) {
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