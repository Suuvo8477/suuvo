import { cn } from '@/lib/utils'

type MoneyIconProps = React.SVGProps<SVGSVGElement>

const MoneyIcon = ({ className, ...props }: MoneyIconProps) => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19.3331 16.0013C19.3331 17.8423 17.8407 19.3347 15.9998 19.3347C14.1589 19.3347 12.6665 17.8423 12.6665 16.0013C12.6665 14.1604 14.1589 12.668 15.9998 12.668C17.8407 12.668 19.3331 14.1604 19.3331 16.0013Z'
        stroke='url(#paint0_linear_2403_20606)'
        stroke-width='2.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21.3332 6.66797C24.639 6.66797 26.9202 7.18024 28.177 7.56973C28.9006 7.79398 29.3332 8.47982 29.3332 9.23737V22.2444C29.3332 23.7312 27.6957 24.8499 26.2348 24.574C24.9813 24.3373 23.3474 24.1472 21.3332 24.1472C14.9986 24.1472 13.4793 26.5548 4.1929 24.5069C3.2967 24.3093 2.6665 23.5033 2.6665 22.5856V9.22952C2.6665 7.92837 3.89422 6.97952 5.17048 7.23277C13.5954 8.90458 15.2277 6.66797 21.3332 6.66797Z'
        stroke='url(#paint1_linear_2403_20606)'
        stroke-width='2.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.6665 12.0016C5.26828 12.0016 7.60628 9.87505 7.90518 7.67384M24.6672 7.33496C24.6672 10.0545 27.0205 12.6269 29.3332 12.6269M29.3332 20.0017C26.801 20.0017 24.3466 21.7486 24.1358 24.1327M8.00049 24.6631C8.00049 21.7175 5.61268 19.3298 2.66716 19.3298'
        stroke='url(#paint2_linear_2403_20606)'
        stroke-width='2.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2403_20606'
          x1='12.6665'
          y1='16.0013'
          x2='19.3331'
          y2='16.0013'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#EF9F22' />
          <stop offset='1' stop-color='#DE127B' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_2403_20606'
          x1='2.6665'
          y1='16.0002'
          x2='29.3332'
          y2='16.0002'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#EF9F22' />
          <stop offset='1' stop-color='#DE127B' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_2403_20606'
          x1='2.6665'
          y1='15.999'
          x2='29.3332'
          y2='15.999'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#EF9F22' />
          <stop offset='1' stop-color='#DE127B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default MoneyIcon
