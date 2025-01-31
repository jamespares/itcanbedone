import ReportForm from '@/components/ReportForm'

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="max-w-md w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-base-content">
          Submit Your Report
        </h1>
        <p className="mb-8 text-base-content/80 text-center">
          Your report will be encrypted and handled with the utmost confidentiality. You can choose
          to remain anonymous or provide contact details.
        </p>
        <ReportForm />
      </div>
    </div>
  )
}
