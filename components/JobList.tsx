import { useEffect, useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { definitions } from 'lib/definitions'

export default function JobList() {
  const [jobs, setJobs] = useState<definitions['jobs'][]>([])

  useEffect(() => {
    loadPage()
  }, [])

  const loadPage = async () => {
    const { data }: { data: any } = await supabase
      .from<definitions['jobs']>('jobs')
      .select('id, name')
      .order('name')
    setJobs(data)
  }

  return (
    <div className="flex flex-col w-full">
      {jobs.map((job) => (
        <a key={job.id}>
          <div className="border rounded py-2 mb-4">
            <h4>{job.name}</h4>
          </div>
        </a>
      ))}
    </div>
  )
}
