
import SITE from 'config/site'
import NavBar from 'components/NavBar'
import Hero from 'components/Hero'
import Footer from 'components/Footer'
import { ReactChild, useState } from 'react'
import Filters from './Filters'
import { Fragment } from 'react'
import { Menu, Transition, Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'


const sorting = [
  { id: 'DATE_DESC', name: 'Newest first', field: 'created', asc: false },
  { id: 'DATE_ASC', name: 'Oldest first', field: 'created', asc: false },
  { id: 'NAME_ASC', name: 'Name Ascending', field: 'name', asc: false },
  { id: 'NAME_DESC', name: 'Name Ascending', field: 'name', asc: false },
]

export default function SidebarLayout({ children }: { children: ReactChild }) {
  const [showFilters, setShowFilters] = useState(true)
  const router = useRouter()
  const { query } = router
  const searchText = query.q?.toString()
  return (
    <div>
      <NavBar />

      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="p-4 flex flex-row">
          <div className="flex-1">
            <h2 className="text-xl font-bold">Jobs {searchText && ` matching "${searchText}"`}</h2>
          </div>
          <div className="flex gap-2">
            <SortDropdown />
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center text-xs p-2 border-2 leading-4 font-medium rounded "
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>
        </div>
        <div className="flex">
          <main className="p-4 flex flex-1">{children}</main>
          <nav className={showFilters ? 'p-4 w-1/4 max-w-64' : 'hidden'}>
            <Filters />
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  )
}



function SortDropdown() {
  const [selected, setSelected] = useState(sorting[0])

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border-2 rounded shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xs">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-xs ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none "
              >
                {sorting.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

