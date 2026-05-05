import type { ElementType, HTMLAttributes, ReactNode } from 'react'

const TYPOGRAPHY_CLASSES = {
  h1: 'text-[36px] md:text-[48px] lg:text-[80px] leading-[40px] md:leading-[52px] lg:leading-[84px] tracking-[-0.04em] font-semibold',
  h2: 'text-[30px] md:text-[44px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[68px] tracking-[-0.034em] font-semibold',
  h3: 'text-[30px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[56px] tracking-[-0.034em] font-semibold',
  h4: 'text-[32px] leading-[36px] tracking-[-0.02em] font-semibold',
  h5: 'text-[18px] lg:text-[24px] leading-[24px] lg:leading-[28px] tracking-[-0.02em] font-semibold',
  p1: 'text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.02em] font-medium',
  p2: 'text-[16px] lg:text-[18px] leading-[24px] tracking-[-0.02em] font-medium',
  p3: 'text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] tracking-[-0.02em] font-medium',
  p4: 'text-[12px] leading-[16px] tracking-[-0.02em] font-medium'
} as const

type TypographyVariant = keyof typeof TYPOGRAPHY_CLASSES
type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'

function mergeClasses(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ')
}

const DEFAULT_TAG_BY_VARIANT = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p1: 'p',
  p2: 'p',
  p3: 'p',
  p4: 'p'
} as const satisfies Record<TypographyVariant, TypographyTag>

type TypographyProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  as?: ElementType
  variant?: keyof typeof TYPOGRAPHY_CLASSES
  className?: string
  children?: ReactNode
}

export default function Typography({ as, variant = 'p3', className, children, ...props }: TypographyProps) {
  const resolvedVariant = (variant in TYPOGRAPHY_CLASSES ? variant : 'p3') as TypographyVariant
  const Component = as || DEFAULT_TAG_BY_VARIANT[resolvedVariant] || 'p'

  return (
    <Component className={mergeClasses(TYPOGRAPHY_CLASSES[resolvedVariant], className)} {...props}>
      {children}
    </Component>
  )
}

export { TYPOGRAPHY_CLASSES, DEFAULT_TAG_BY_VARIANT }
