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
    <div className="flex flex-col">

      {jobs.map((job) => (
        <div key={job.id}>{job.name}</div>
      ))}
    </div>
  )
}
