import { Shield, Lock, FileText, UserCheck } from 'lucide-react'

const steps = [
  {
    icon: Shield,
    title: 'Protected by Law',
    description: 'UK whistleblowers are protected by the Public Interest Disclosure Act 1998.'
  },
  {
    icon: Lock,
    title: 'Secure Submission',
    description: 'End-to-end encrypted reporting system with optional anonymity.'
  },
  {
    icon: FileText,
    title: 'Expert Review',
    description: 'Your report is reviewed by legal experts and investigative journalists.'
  },
  {
    icon: UserCheck,
    title: 'Ongoing Support',
    description: 'Continuous guidance and protection throughout the process.'
  }
]

export default function ReportingProcess() {
  return (
    <div className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral">
          Is It Safe to Report?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
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