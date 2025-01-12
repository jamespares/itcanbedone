# Public Service Whistleblower Platform

A secure platform for UK public sector workers to report corruption and incompetence. Built with Next.js 14, TypeScript, Tailwind CSS, and DaisyUI.

## Features

- 🔒 Secure, anonymous reporting system
- 📝 Detailed submission form with optional contact information
- 🎨 Modern, responsive design
- 📊 Reports management system
- 🖨️ Export capabilities (Download CSV)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jamespares/itcanbedone.git
cd itcanbedone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
```

4. Create the data directory:
```bash
mkdir data
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
    /admin               # Admin dashboard
    /api                # API routes
    /report             # Report submission page
  /components           # React components
  /lib                  # Utilities and database handling
/data                   # JSON database storage (gitignored)
```

## Key Components

- `ReportForm`: Main form component for whistleblower submissions
- `AdminPage`: Password-protected admin access
- `ReportsPage`: Dashboard to view and manage submissions
- `db.ts`: Local JSON database management

## Database

The application uses a simple JSON file-based database located in `/data/reports.json`. This file is automatically created when the first report is submitted.

⚠️ Important: The `/data` directory is gitignored to protect sensitive information.

## Security Considerations

1. All reports are stored locally in the `/data` directory
2. Admin access is protected by a password (set in `.env.local`)
3. Anonymous submission option available
4. No tracking or IP logging

## Development

### Adding New Features

1. Create new components in `/src/components`
2. Add new pages in `/src/app` directory
3. Extend database schema in `/src/lib/db.ts`

### Modifying the Form

Edit `src/components/ReportForm.tsx` to add or modify form fields.

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
- Set up proper environment variables
- Configure proper server security
- Set up regular backups of the `/data` directory

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
