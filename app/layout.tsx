import type { Metadata } from 'next'
import { Mona_Sans, Shadows_Into_Light_Two, Geist } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/lib/StoreProvider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  display: 'swap'
})

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  variable: '--font-shadows-into-light-two',
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Suuvo ',
  description: 'A Better Way to Be Social, For Real'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn('antialiased', monaSans.variable, shadowsIntoLightTwo.variable, 'font-sans', geist.variable)}
    >
      <body>
        <StoreProvider>{children}</StoreProvider>
        <Toaster position='top-center' closeButton />
      </body>
    </html>
  )
}
