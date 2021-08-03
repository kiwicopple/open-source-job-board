
import SITE from 'config/site'
import NavBar from 'components/NavBar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { ReactChild } from 'react'
import Filters from './Filters'

export default function SidebarLayout({ children }: { children: ReactChild }) {
  return (
    <div>
      {/* <header className="flex align-middle justify-center">
        <div className="w-64">
          <h1>
            <img src={SITE.logo} alt={SITE.name} />
          </h1>
        </div>
      </header> */}
      <NavBar />

      <Hero />
      <div className="max-w-7xl mx-auto flex">
        <nav className="p-4">
          <Filters />
        </nav>
        <main className="p-4 flex flex-1">{children}</main>
      </div>

      <Footer />
    </div>
  )
}
