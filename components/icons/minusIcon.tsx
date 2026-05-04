import { cn } from '@/lib/utils'

type MinusIconProps = React.SVGProps<SVGSVGElement>

const MinusIcon = ({ className, ...props }: MinusIconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path d='M20 12H4' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
    </svg>
  )
}

export default MinusIcon
