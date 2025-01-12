import Hero from '@/components/Hero'
import ReportingProcess from '@/components/ReportingProcess'
import SafetyMeasures from '@/components/SafetyMeasures'
import JoinMovement from '@/components/JoinMovement'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ReportingProcess />
      <SafetyMeasures />
      <JoinMovement />
      <Footer />
    </div>
  )
}
