import { useEffect, useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { definitions } from 'lib/definitions'

type JobData = definitions['jobs'] & {
  company: definitions['companies']
}

export default function JobList() {
  const [jobs, setJobs] = useState<JobData[]>([])

  useEffect(() => {
    loadPage()
  }, [])

  const loadPage = async () => {
    const { data }: { data: any } = await supabase
      .from<JobData>('jobs')
      .select(
        `
        id, name, description, 
        company:companies(id, name)
        `
      )
      .order('name')
    setJobs(data)
  }

  return (
    <div className="flex flex-col w-full">
      {jobs.map((job) => (
        <div key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  )
}

const JobCard = ({ job }: { job: JobData }) => {
  return (
    <a key={job.id}>
      <div className="border rounded p-2 mb-4">
        <h5 className="uppercase text-gray-600 text-sm">{job.company.name}</h5>
        <h4 className="text-xl font-bold">{job.name}</h4>
        <div>{job.description}</div>
      </div>
    </a>
  )
}
