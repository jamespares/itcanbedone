import Link from 'next/link'

export default function Hero() {
  return (
    <div className="hero min-h-[600px] bg-neutral text-neutral-content">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">Have you witnessed serious incompetence or corruption in the UK public sector?</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/report" 
              className="btn btn-primary btn-lg"
            >
              Report Securely
            </Link>
            <Link
              href="/join"
              className="btn btn-outline btn-lg text-neutral-content hover:bg-neutral-content hover:text-neutral"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 