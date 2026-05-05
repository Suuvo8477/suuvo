import { cn } from '@/lib/utils'

type LocationIconProps = React.SVGProps<SVGSVGElement>

const LocationIcon = ({ className, ...props }: LocationIconProps) => {
  return (
    <svg
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-5 w-5', className)}
      aria-hidden='true'
      {...props}
    >
      <path
        d='M10 10C11.3807 10 12.5 8.88075 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61925 5 7.5 6.11929 7.5 7.5C7.5 8.88075 8.61925 10 10 10Z'
        stroke='currentColor'
        strokeWidth='1.25'
      />
      <path
        d='M9.99935 1.66699C6.77769 1.66699 4.16602 4.22963 4.16602 7.39079C4.16602 9.19833 4.89518 10.6038 6.35352 11.8592C7.38143 12.7441 9.25168 14.6422 9.99935 15.8336C10.7848 14.6659 12.6173 12.7441 13.6452 11.8592C15.1035 10.6038 15.8327 9.19833 15.8327 7.39079C15.8327 4.22963 13.221 1.66699 9.99935 1.66699Z'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <path
        d='M15 15.833C15 17.2138 12.7614 18.333 10 18.333C7.23857 18.333 5 17.2138 5 15.833'
        stroke='currentColor'
        strokeWidth='1.25'
      />
    </svg>
  )
}

export default LocationIcon
