import { useEffect, useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { definitions } from 'lib/definitions'
import useFilterState from 'lib/useFilterState'
import { useRouter } from 'next/router'
import { addOrRemove } from 'lib/helpers'

const jobTypes = [
  { key: 'full_time', value: 'Full Time' },
  { key: 'part_time', value: 'Part Time' },
  { key: 'contract', value: 'Contract' },
  { key: 'internship', value: 'Internship' },
]

export default function Filters() {
  const [countries, setCountries] = useState<definitions['countries'][]>([])

  // Use the URL to store query state
  const router = useRouter()
  const { query } = router
  const filterState = useFilterState()
  const selectedTypes = filterState.types

  useEffect(() => {
    loadPage()
  }, [])

  const loadPage = async () => {
    const { data }: { data: any } = await supabase
      .from<definitions['countries']>('countries')
      .select('id, name')
      .order('name')
    setCountries(data)
  }

  function toggleJobTypes(event: React.ChangeEvent<HTMLInputElement>) {
    const type = addOrRemove(selectedTypes, event.target.id).join(',')
    if (type) pushState({ ...query, type })
    else pushState({ ...query, type: undefined })
  }

  function pushState(query: any) {
    router.push(
      {
        pathname: '/',
        query,
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className="flex flex-col border-2 overflow-hidden sm:rounded-md divide-y">
      <div className="p-4">
        <h5 className="text-md font-bold pb-2">Type</h5>
        <fieldset className="space-y-2">
          {jobTypes.map(({ key, value }) => (
            <div key={key} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={key}
                  aria-describedby={value}
                  name={value}
                  onChange={toggleJobTypes}
                  type="checkbox"
                  checked={selectedTypes.includes(key)}
                  className="focus:ring-brand h-4 w-4 text-brand border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={key} className="font-medium text-gray-700 cursor-pointer">
                  {value}
                </label>
              </div>
            </div>
          ))}
        </fieldset>
      </div>

      <div className="p-4">
        <h5 className="text-md font-bold pb-2">Countries</h5>
        <fieldset>
          <select name="countries" multiple className="border rounded ">
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </fieldset>
      </div>
    </div>
  )
}
