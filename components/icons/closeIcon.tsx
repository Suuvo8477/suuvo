import { cn } from '@/lib/utils'

type CloseIconProps = React.SVGProps<SVGSVGElement>

const CloseIcon = ({ className, ...props }: CloseIconProps) => {
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
        d='M15 5L5 15M5 5L15 15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CloseIcon
