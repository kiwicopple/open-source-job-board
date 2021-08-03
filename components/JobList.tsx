import { useEffect, useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { definitions } from 'lib/definitions'
import { useRouter } from 'next/router'
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'

type JobData = definitions['jobs'] & {
  company: definitions['companies']
}

export default function JobList() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [jobs, setJobs] = useState<JobData[]>([])
  const { query } = router
  const searchText = query.q?.toString()

  useEffect(() => {
    loadPage()
  }, [searchText])

  const loadPage = async () => {
    try {
      setLoading(true)
      const fetchJobs = supabase.from<JobData>('jobs').select(
        `
        id, title, description, type,
        company:companies(id, name)
        `
      )

      if (searchText) {
        fetchJobs.textSearch('fts', searchText)
      }

      const { data }: { data: any } = await fetchJobs.order('title')
      console.log('data', data)
      setJobs(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="bg-white shadow overflow-hidden sm:rounded-md divide-y divide-gray-200">
        {jobs.map((job) => (
            <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  )
}

const JobCard = ({ job }: { job: JobData }) => {
  return (
      <a href="#" className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-md"
              src={
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
              alt=""
            />
          </div>
          <div className="px-4 py-4 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-md font-bold truncate">{job.title} at {job.company.name}</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {job.type}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <UsersIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Job.department
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Job Location
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <p>
                  Closing on <time dateTime={new Date().toDateString()}>Closing</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
