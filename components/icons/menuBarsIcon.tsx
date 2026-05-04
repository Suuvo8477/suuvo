import { cn } from '@/lib/utils'

type MenuBarsIconProps = React.SVGProps<SVGSVGElement>

const MenuBarsIcon = ({ className, ...props }: MenuBarsIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={cn('h-5 w-5', className)}
      {...props}
    >
      <path
        d='M3.33301 4.16667H16.6663'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.33301 10H16.6663'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.33301 15.8333H16.6663'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MenuBarsIcon
