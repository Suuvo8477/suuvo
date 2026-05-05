import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

const BlankPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BlankPageLayout
