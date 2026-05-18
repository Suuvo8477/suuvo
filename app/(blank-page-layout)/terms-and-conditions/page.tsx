import { Metadata } from 'next'
import TermsAndConditionsView from '@/views/terms-and-conditions'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Suuvo',
  description: 'Terms & Conditions for Suuvo, Inc. The complete agreement governing your access to and use of the Suuvo platform and all related services.'
}

const TermsAndConditionsPage = () => {
  return <TermsAndConditionsView />
}

export default TermsAndConditionsPage
