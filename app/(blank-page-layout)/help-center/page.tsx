import { Metadata } from 'next'
import HelpCenterView from '@/views/help-center'

export const metadata: Metadata = {
  title: 'Support Policy & Help Center Terms — Suuvo',
  description: 'Support Policy & Help Center Terms for Suuvo, Inc. Governing support services, customer assistance, reporting, and help resources.'
}

const HelpCenterPage = () => {
  return <HelpCenterView />
}

export default HelpCenterPage
