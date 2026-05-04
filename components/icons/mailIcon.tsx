import { cn } from '@/lib/utils'

type MailIconProps = React.SVGProps<SVGSVGElement>

const MailIcon = ({ className, ...props }: MailIconProps) => {
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
        d='M3.33268 3.33301H16.666C17.5865 3.33301 18.3327 4.0792 18.3327 4.99967V14.9997C18.3327 15.9202 17.5865 16.6663 16.666 16.6663H3.33268C2.41221 16.6663 1.66602 15.9202 1.66602 14.9997V4.99967C1.66602 4.0792 2.41221 3.33301 3.33268 3.33301Z'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <path
        d='M18.3327 5.83301L10.7447 9.62701C10.2755 9.86159 9.72318 9.86159 9.25402 9.62701L1.66602 5.83301'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MailIcon
