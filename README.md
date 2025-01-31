# Public Service Whistleblower Platform

A secure platform for UK public sector workers to report corruption and incompetence. Built with Next.js 14, TypeScript, Tailwind CSS, and DaisyUI.

## Features

- 🔒 Secure, anonymous reporting system
- 📝 Simple submission form with optional contact information
- 🤝 Network building for public sector reform
- 🛡️ Legal protection information
- 🎯 Clear, focused user experience

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Database**: Supabase
- **Icons**: Lucide React
- **Form Handling**: Native React Forms
- **Development Tools**: ESLint, Prettier, Husky

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase account

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

3. Set up Supabase:

   - Create a new Supabase project
   - Create the required tables using the schema in `src/types/database.ts`
   - Copy your project URL and anon key

4. Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
/src
  /app                      # Next.js 14 app directory
    /api                    # API routes
      /join-network        # Network membership endpoint
      /reports            # Report submission endpoint
    /join                 # Join network page
    /report              # Report submission page
  /components             # React components
  /lib                    # Supabase client
  /types                  # TypeScript definitions
```

## Database Schema

The application uses two main tables:

### Reports Table

```sql
create table reports (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  organization text not null,
  department text,
  description text not null,
  is_anonymous boolean not null default false,
  contact_email text
);
```

### Network Members Table

```sql
create table network_members (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text,
  twitter_handle text
);
```

## Development

The project includes:

- Pre-commit hooks for code quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `npm run type-check`: Run TypeScript checks

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
- Configure Supabase access and security rules
- Regularly backup your database

## License

[MIT License](LICENSE)

## Support

For support or questions, please open an issue in the GitHub repository.
