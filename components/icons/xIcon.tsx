import { cn } from '@/lib/utils'

type XIconProps = React.SVGProps<SVGSVGElement>

const XIcon = ({ className, ...props }: XIconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-6 w-6', className)}
      aria-hidden='true'
      {...props}
    >
      <path
        d='M4 4L15.733 20H20L8.267 4H4Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 20L10.768 13.232M13.228 10.772L20 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default XIcon
