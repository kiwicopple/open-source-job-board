import { Fragment } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import SITE from 'config/site'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function NavBar() {
  return (
    <div className="relative py-6">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a >
                  <img className="h-8 w-auto sm:h-10" src={SITE.logo} alt={SITE.name} />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border-2 text-base font-medium rounded-md bg-white hover:bg-gray-50"
              >
                Post Job
              </a>
            </span>
          </div>
        </nav>
      </div>
    </div>
  )
}
