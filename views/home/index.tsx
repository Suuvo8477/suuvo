import HeroSection from './HeroSection'
import SocialSection from './SocialSection'
import ScrollStackSection from './ScrollStackSection'
import BenefitsSection from './BenefitsSection'
import CreatorSection from './CreatorSection'
import FAQSection from './FAQSection'
import CTASection from './CTASection'
import WaitListModal from '@/components/overlays/WaitListModal'

const Home = () => {
  return (
    <>
      <div id='home' className='overflow-hidden'>
        <HeroSection />
      </div>

      <div id='overview'>
        <SocialSection />
      </div>

      <div id='features'>
        <ScrollStackSection />
      </div>

      <div className='overflow-hidden'>
        <BenefitsSection />
        <CreatorSection />
        <div id='faqs'>
          <FAQSection />
        </div>
      </div>

      <WaitListModal />
    </>
  )
}

export default Home
