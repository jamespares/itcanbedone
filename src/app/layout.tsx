import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Common Sense UK - Blow the Whistle on Public Sector Corruption',
  description:
    'A secure platform for UK public sector workers to report corruption and incompetence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}
