import BadgeIcon from '@/components/icons/BadgeIcon'
import BagIcon from '@/components/icons/BagIcon'
import BrainIcon from '@/components/icons/BrainIcon'
import CameraIcon from '@/components/icons/CamraIcon'
import EarlyAccessIcon from '@/components/icons/EarlyAccess'
import ExclusiveIcon from '@/components/icons/Exclusive'
import LogoIcon from '@/components/icons/logo'
import MoneyIcon from '@/components/icons/MoneyIcon'
import StoreIcon from '@/components/icons/Store'
import UserIcon2 from '@/components/icons/UserIcon2'
import Logo from '@/components/shared/logo'
import Typography from '@/components/typography'

const FeaturesSection = () => {
  const cards = [
    {
      icon: <MoneyIcon />,
      title: 'Monetize from Day 1',
      description: 'Multiple ways to earn exciting rewards instantly.'
    },
    {
      icon: <BrainIcon />,
      title: 'AI Personalization',
      description: 'Smarter feed. Better social connections.'
    },
    {
      icon: <BagIcon />,
      title: 'Shops & Commerce',
      description: 'Sell, shop, and earn seamlessly from anywhere.'
    },
    {
      icon: <CameraIcon />,
      title: 'LIVE & Competitions',
      description: 'Engage, compete, and grow loyal creator fans.'
    },
    {
      icon: <StoreIcon />,
      title: 'Dual Currency System',
      description: 'Coins for engagement. Reward tokens for value.'
    }
  ]

  return (
    <section>
      <div className='s-container'>
        <div className='pb-33.75'>
          <Typography variant='h3' className=' text-center mx-auto mb-15 flex items-center justify-center gap-5'>
            <span>Why</span> <LogoIcon /> <span>SUUVO Stand Out</span>
          </Typography>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8'>
            {cards.map((card, index) => (
              <div key={index}>
                <div>
                  <div className='flex items-center mb-4'>{card.icon}</div>
                  <Typography variant='p1' className='mb-2 font-bold!'>
                    {card.title}
                  </Typography>
                  <Typography variant='p3' className='text-black'>{card.description}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
