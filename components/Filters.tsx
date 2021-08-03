import { useEffect, useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { definitions } from 'lib/definitions'

export default function Filters() {
  const [countries, setCountries] = useState<definitions['countries'][]>([])

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

  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold">Filter</h3>

      <h5 className="text-md font-bold">Countries</h5>
      <select name="countries" multiple className="border rounded ">
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  )
}
