import type { Metadata } from 'next'
import { Mona_Sans, Shadows_Into_Light_Two } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/lib/StoreProvider'

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
    <html lang='en' className={`${monaSans.variable} ${shadowsIntoLightTwo.variable} antialiased`}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
