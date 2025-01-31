import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-neutral text-neutral-content flex items-center">
      <div className="max-w-4xl mx-auto px-8 py-20 text-center space-y-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Have you witnessed serious incompetence or corruption in the UK public sector?
        </h1>

        <div className="space-y-8">
          <div className="bg-neutral-focus p-6 rounded-lg border-l-4 border-primary">
            <div className="flex flex-col items-center gap-4">
              <Shield className="w-8 h-8 text-primary" />
              <p className="text-xl opacity-90 leading-relaxed">
                Submit your report securely and anonymously. Your information will be handled with
                the utmost confidentiality and reviewed by legal experts.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/report" className="btn btn-primary btn-lg px-8">
              Report Securely
            </Link>
            <Link
              href="/join"
              className="btn btn-outline btn-lg px-8 text-neutral-content hover:bg-neutral-content hover:text-neutral"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
