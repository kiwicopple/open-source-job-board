
import SITE from 'config/site'
import NavBar from 'components/NavBar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { ReactChild, useState } from 'react'
import Filters from './Filters'
import { FilterIcon, SortAscendingIcon } from '@heroicons/react/solid'

export default function SidebarLayout({ children }: { children: ReactChild }) {
  const [showFilters, setShowFilters] = useState(true)
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
      <div className="max-w-7xl mx-auto">
        <div className="p-4 flex gap-2">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center text-sm p-2 border shadow-sm text-sm leading-4 font-medium rounded "
          >
            Sort
            <SortAscendingIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center text-sm p-2 border shadow-sm text-sm leading-4 font-medium rounded "
          >
            {showFilters? 'Hide': 'Show'} Filters
            <FilterIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex">
          <main className="p-4 flex flex-1">{children}</main>

          <nav className={showFilters ? 'p-4' : 'hidden'}>
            <Filters />
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  )
}
