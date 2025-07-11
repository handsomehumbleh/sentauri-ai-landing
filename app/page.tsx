import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Process } from '@/components/Process'
import { Grants } from '@/components/Grants'
import { About } from '@/components/About'
import { Resources } from '@/components/Resources'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { TrustBanner } from '@/components/TrustBanner'
import { ExitIntent } from '@/components/ExitIntent'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <Process />
        <Testimonials />
        <Grants />
        <About />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <ExitIntent />
    </>
  )
}