import { useState } from 'react'
import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'

export default function SearchBar() {
  const router = useRouter()

  const [query, setQuery] = useState('')

  function handleEnter(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      event?.preventDefault()
      event?.stopPropagation()
      search()
    }
  }

  function search() {
    router.push({
      pathname: '/',
      query: { q: query },
    })
  }

  return (
    <div className="mt-1 relative rounded-md shadow-sm w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
        className="focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-4"
        placeholder="Search jobs"
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <button
          className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"
          onClick={() => search()}
        >
          Search
        </button>
      </div>
    </div>
  )
}
