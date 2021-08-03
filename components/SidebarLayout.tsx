
import SITE from 'config/site'
import Header from 'components/Hero'
import Footer from 'components/Footer'
import { ReactChild } from 'react'

export default function SidebarLayout({ children }: { children: ReactChild }) {
  return (
    <div>

      <header className="flex align-middle justify-center">
        <div className="w-64">
          <h1>
            <img src={SITE.logo} alt={SITE.name} />
          </h1>
        </div>
      </header>

      <Header />
      <main className="flex">
        {children}
      </main>

      <Footer />
    </div>
  )
}
