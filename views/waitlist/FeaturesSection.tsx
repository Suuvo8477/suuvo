import BadgeIcon from '@/components/icons/BadgeIcon'
import EarlyAccessIcon from '@/components/icons/EarlyAccess'
import ExclusiveIcon from '@/components/icons/Exclusive'
import UserIcon2 from '@/components/icons/UserIcon2'
import Typography from '@/components/typography'
import { User } from 'lucide-react'

const FeaturesSection = () => {
  const cards = [
    {
      icon: <UserIcon2 />,
      title: 'Claim Your Identity',
      description: 'Secure your unique username before someone else does.'
    },
    {
      icon: <BadgeIcon />,
      title: 'Stand Out',
      description: 'Build your brand and stand out in the Suuvo community.'
    },
    {
      icon: <EarlyAccessIcon className='w-8 h-8' />,
      title: 'Be First',
      description: 'Get early access to new features and exciting updates.'
    },
    {
      icon: <ExclusiveIcon className='w-8 h-8' />,
      title: 'Exclusive Perks',
      description: 'Enjoy rewards, badges, and surprises for early members.'
    }
  ]

  return (
    <section>
      <div className='s-container'>
        <div className='pt-12 sm:pt-18 lg:px-11.75'>
          <Typography variant='h2' className='max-w-139 text-center mx-auto mb-10 md:mb-15 text-text-primary'>
            Why Reserve Your Username?
          </Typography>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 xl:gap-21'>
            {cards.map((card, index) => (
              <div key={index}>
                <div>
                  <div className='flex items-center mb-4'>{card.icon}</div>
                  <Typography variant='p1' className='mb-2 sm:text-lg text-text-primary font-bold!'>
                    {card.title}
                  </Typography>
                  <Typography variant='p3' className='sm:text-base text-text-primary'>
                    {card.description}
                  </Typography>
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
