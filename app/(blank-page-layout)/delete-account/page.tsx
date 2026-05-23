import { Metadata } from 'next'
import DeleteAccountView from '@/views/delete-account'

export const metadata: Metadata = {
  title: 'Delete Account — Suuvo',
  description: 'Request permanent deletion of your Suuvo account and all associated data.'
}

const DeleteAccountPage = () => {
  return <DeleteAccountView />
}

export default DeleteAccountPage
