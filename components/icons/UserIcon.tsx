import { cn } from '@/lib/utils'

type UserIconProps = React.SVGProps<SVGSVGElement>

const UserIcon = ({ className, ...props }: UserIconProps) => {
  return (
    <svg
      width='58'
      height='58'
      viewBox='0 0 58 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-14.5 w-14.5', className)}
      aria-hidden='true'
      {...props}
    >
      <path
        d='M0 28C0 14.8007 0 8.20101 4.1005 4.1005C8.20101 0 14.8007 0 28 0H30C43.1993 0 49.799 0 53.8995 4.1005C58 8.20101 58 14.8007 58 28V30C58 43.1993 58 49.799 53.8995 53.8995C49.799 58 43.1993 58 30 58H28C14.8007 58 8.20101 58 4.1005 53.8995C0 49.799 0 43.1993 0 30V28Z'
        fill='url(#paint0_linear_2376_14055)'
      />
      <path
        d='M32.75 24C32.75 20.5482 29.9517 17.75 26.5 17.75C23.0482 17.75 20.25 20.5482 20.25 24C20.25 27.4517 23.0482 30.25 26.5 30.25C29.9517 30.25 32.75 27.4517 32.75 24Z'
        stroke='white'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M35.875 40.25V31.5M31.5 35.875H40.25'
        stroke='white'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.75 39C17.75 34.1675 21.6675 30.25 26.5 30.25C28.359 30.25 30.0827 30.8297 31.5 31.8184'
        stroke='white'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient id='paint0_linear_2376_14055' x1='0' y1='29' x2='58' y2='29' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#EF9F22' />
          <stop offset='1' stopColor='#DE127B' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default UserIcon
