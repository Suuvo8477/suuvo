'use client'

import Button from '@/components/button'
import { openWaitList } from '@/lib/features/waitList/waitListSlice'
import { useAppDispatch } from '@/lib/hooks'

type Props = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

const WishListButton = ({ onClick, variant = 'primary', className = '' }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Button
      type='button'
      variant={variant}
      onClick={e => {
        e.currentTarget.blur()
        onClick?.()
        dispatch(openWaitList())
      }}
      className={className}
    >
      Join Waitlist
    </Button>
  )
}

export default WishListButton
