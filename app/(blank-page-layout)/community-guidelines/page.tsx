import { Metadata } from 'next'
import CommunityGuidelinesView from '@/views/community-guidelines'

export const metadata: Metadata = {
  title: 'Community Guidelines — Suuvo',
  description: 'Community Guidelines for Suuvo, Inc. Rules, standards, and expectations for behavior and content across the Suuvo platform.'
}

const CommunityGuidelinesPage = () => {
  return <CommunityGuidelinesView />
}

export default CommunityGuidelinesPage
