import { google } from 'googleapis'

export async function appendToSheet(email: string, timezone: string, status: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Sheet1!A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          email,
          new Date().toISOString(),
          timezone || 'Unknown',
          new Date().toLocaleString('en-US', { timeZone: timezone }),
          status
        ]
      ]
    }
  })
}
