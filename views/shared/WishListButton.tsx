'use client'

import Button from '@/components/button'
import { useRouter } from 'next/navigation'

type Props = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

const WishListButton = ({ onClick, variant = 'primary', className = '' }: Props) => {
  const router = useRouter()

  return (
    <Button
      variant={variant}
      type='button'
      onClick={() => {
        onClick?.()
        router.push('/waitlist')
      }}
      className={className}
    >
      Join Waitlist
    </Button>
  )
}

export default WishListButton
