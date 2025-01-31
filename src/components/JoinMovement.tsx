import Link from 'next/link'

export default function JoinMovement() {
  return (
    <div className="bg-primary text-primary-content py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement for Change</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We&apos;re building a network of professionals committed to public sector reform. Your
            expertise and dedication can help transform UK public services.
          </p>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="card bg-primary-focus">
              <div className="card-body">
                <h3 className="card-title justify-center mb-4">Why Join Us?</h3>
                <ul className="space-y-3 text-left opacity-90">
                  <li>• Connect with like-minded professionals</li>
                  <li>• Contribute to systemic reform</li>
                  <li>• Help shape policy recommendations</li>
                </ul>
              </div>
            </div>

            <Link
              href="/join"
              className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
            >
              Join Our Network
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
