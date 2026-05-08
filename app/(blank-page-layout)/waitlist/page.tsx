import Waitlist from "@/views/waitlist"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'The Future of Social Media',
  description:
    'A new way to connect, create, and engage. Experience a social media platform that goes beyond likes—built for real connections, privacy, and engagemen'
}


const WaitlistPage = () => {
  return (
    <Waitlist />
  )
}

export default WaitlistPage
