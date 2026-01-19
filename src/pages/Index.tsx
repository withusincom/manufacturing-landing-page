import ContactSection from '@/components/sections/contact/ContactSection'
import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'
import HeroSection from '@/components/sections/hero/HeroSection'
import { PoCSection } from '@/components/sections/poc/PoCSection'
import ServicesSection from '@/components/sections/services/ServicesSection'
import TargetSection from '@/components/sections/target/TargetSection'
import { Layout } from 'antd'

const { Content } = Layout

export const Index = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Content>
        <div className="h-20 bg-black" /> {/* 헤더 fixed 배경색 */}
        <HeroSection />
        <ServicesSection />
        <TargetSection />
        <PoCSection />
        <ContactSection />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Index
