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
  const [departments, setDepartments] = useState<definitions['departments'][]>([])
  const [countries, setCountries] = useState<definitions['countries'][]>([])

  // Use the URL to store query state
  const router = useRouter()
  const { query } = router
  const filterState = useFilterState()
  const selectedTypes = filterState.types
  const selectedDepartments = filterState.departments

  useEffect(() => {
    loadPage()
  }, [])

  const loadPage = async () => {
    const [{ data: departments }, { data: countries }] = await Promise.all([
      supabase.from<definitions['departments']>('departments').select('id, name').order('name'),
      supabase.from<definitions['countries']>('countries').select('id, name').order('name'),
    ])

    if (departments) setDepartments(departments)
    if (countries) setCountries(countries)
  }

  function toggleJobTypes(event: React.ChangeEvent<HTMLInputElement>) {
    const type = addOrRemove(selectedTypes, event.target.value).join(',')
    pushState({ ...query, type })
  }

  function toggleDepartments(event: React.ChangeEvent<HTMLInputElement>) {
    const department = addOrRemove(selectedDepartments, event.target.value).join(',')
    pushState({ ...query, department })
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
    <div className="flex flex-col shadow-md overflow-hidden sm:rounded-md divide-y">
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
                  value={key}
                  onChange={toggleJobTypes}
                  type="checkbox"
                  checked={selectedTypes.includes(key)}
                  className="focus:ring-brand-500 h-4 w-4 text-brand-500 border-gray-300 rounded cursor-pointer"
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
        <h5 className="text-md font-bold pb-2">Department</h5>
        <fieldset className="space-y-2">
          {departments.map(({ id, name }) => (
            <div key={id} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={`department_${id}`}
                  aria-describedby={name}
                  name={name}
                  value={id}
                  onChange={toggleDepartments}
                  type="checkbox"
                  checked={selectedDepartments.includes(id.toString())}
                  className="focus:ring-brand-500 h-4 w-4 text-brand-500 border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor={`department_${id}`}
                  className="font-medium text-gray-700 cursor-pointer"
                >
                  {name}
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
