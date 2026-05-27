import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import { ServicesSection, OffersSection } from '../components/Sections1'
import { StoreReviews, WhyChoose, TaxiIndia, UniqueSection } from '../components/Sections2'
import { DownloadSection, DestinationsSection, CustomerReviews, DriverReviews, HowItWorks } from '../components/Sections3'
import { PopularRoutes, PressRelease, FAQ, OurClients, Footer, FloatingButtons } from '../components/Sections4'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <main>
        <ServicesSection />
        <OffersSection />
        <StoreReviews />
        <WhyChoose />
        <TaxiIndia />
        <UniqueSection />
        <DownloadSection />
        <DestinationsSection />
        <CustomerReviews />
        <DriverReviews />
        <HowItWorks />
        <PopularRoutes />
        <PressRelease />
        <FAQ />
        <OurClients />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
