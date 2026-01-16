import ContactSection from '@/components/sections/contact/ContactSection'
import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'
import HeroSection from '@/components/sections/hero/HeroSection'
import { PoCSection } from '@/components/sections/poc/PoCSection'
import ServicesSection from '@/components/sections/services/ServicesSection'
import Trans from '@/components/sections/services/Trans'
import TargetSection from '@/components/sections/target/TargetSection'

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Trans />
        <ServicesSection />
        <TargetSection />
        <PoCSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
