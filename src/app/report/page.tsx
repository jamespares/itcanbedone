import ReportForm from '@/components/ReportForm'

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-6">Submit Your Report</h1>
            <p className="mb-8 text-neutral/80">
              Your report will be encrypted and handled with the utmost confidentiality. 
              You can choose to remain anonymous or provide contact details.
            </p>
            <ReportForm />
          </div>
        </div>
      </div>
    </div>
  )
} 