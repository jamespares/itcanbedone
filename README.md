# Public Service Whistleblower Platform

A secure platform for UK public sector workers to report corruption and incompetence. Built with Next.js 14, TypeScript, Tailwind CSS, and DaisyUI.

## Features

- 🔒 Secure, anonymous reporting system
- 📝 Simple submission form with optional contact information
- 🎨 Clean, focused design
- 📊 Google Sheets integration for easy report management
- 🔐 Protected by Public Interest Disclosure Act 1998

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Cloud Platform account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/itcanbedone.git
cd itcanbedone
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Sheets:
   - Create a new Google Cloud Project
   - Enable Google Sheets API
   - Create a service account and download credentials
   - Create a new Google Sheet and share it with your service account email
   - Copy your Google Sheet ID from the URL

4. Create a `.env.local` file in the root directory:
```env
GOOGLE_SHEETS_CREDENTIALS={"type": "service_account", ...} # Your service account JSON
GOOGLE_SHEETS_ID=your-spreadsheet-id
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
/src
  /app                    # Next.js 14 app directory
    /api                 # API routes for form submission
    /report             # Report submission page
  /components           # React components
  /lib                  # Google Sheets integration
```

## Google Sheets Structure

The connected Google Sheet should have the following columns:
- Timestamp
- Organization
- Department
- Description
- Anonymous
- Email (if provided)

## Development

### Adding New Fields

1. Update the form component in `src/components/ReportForm.tsx`
2. Modify the Google Sheets integration in `src/lib/sheets.ts`
3. Add new columns to your Google Sheet

### Styling

The project uses Tailwind CSS with DaisyUI components. Theme configuration is in `tailwind.config.ts`.

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Remember to:
- Set up environment variables on your hosting platform
- Ensure your Google Cloud Project is properly configured
- Keep your service account credentials secure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[MIT License](LICENSE)

## Support

For support or questions, please open an issue in the GitHub repository.
