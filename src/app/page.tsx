import Hero from '@/components/Hero'
import ReportingProcess from '@/components/ReportingProcess'
import TestimonialSection from '@/components/TestimonialSection'
import JoinMovement from '@/components/JoinMovement'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ReportingProcess />
      <TestimonialSection />
      <JoinMovement />
    </div>
  )
}
