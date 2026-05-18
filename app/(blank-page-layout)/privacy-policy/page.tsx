import { Metadata } from 'next'
import PrivacyPolicyView from '@/views/privacy-policy'

export const metadata: Metadata = {
  title: 'Privacy Policy — Suuvo',
  description: 'Privacy Policy for Suuvo, Inc. Learn how we collect, use, store, and protect your personal information across the Suuvo platform.'
}

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyView />
}

export default PrivacyPolicyPage
