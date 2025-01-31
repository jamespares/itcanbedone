import { Shield, Lock, FileText } from 'lucide-react'

const steps = [
  {
    icon: Lock,
    title: 'Secure Submission',
    description: 'End-to-end encrypted reporting system with optional anonymity.',
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Protected by the Public Interest Disclosure Act 1998 against unfair dismissal.',
  },
  {
    icon: FileText,
    title: 'Expert Review',
    description: 'Your report is reviewed by legal experts and investigative journalists.',
  },
]

export default function ReportingProcess() {
  return (
    <div className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-neutral">Your Safety is Our Priority</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto text-neutral">
            We implement industry-leading security measures to protect whistleblowers and ensure
            your information remains confidential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body items-center text-center">
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title mb-2 text-neutral">{step.title}</h3>
                <p className="text-neutral/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
