export default function SafetyMeasures() {
  return (
    <div className="bg-neutral text-neutral-content py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Your Safety is Our Priority
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            We implement industry-leading security measures to protect whistleblowers and ensure your information remains confidential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-neutral-focus shadow-xl">
            <div className="card-body">
              <h3 className="card-title mb-4">Legal Protection</h3>
              <ul className="space-y-4 opacity-75">
                <li>• Protected by Public Interest Disclosure Act 1998</li>
                <li>• Legal guidance throughout the process</li>
                <li>• Protection against unfair dismissal</li>
                <li>• Confidentiality agreements</li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-neutral-focus shadow-xl">
            <div className="card-body">
              <h3 className="card-title mb-4">Technical Security</h3>
              <ul className="space-y-4 opacity-75">
                <li>• End-to-end encryption</li>
                <li>• Anonymous submission option</li>
                <li>• Secure file transfer</li>
                <li>• No IP logging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 