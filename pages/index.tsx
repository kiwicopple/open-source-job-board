import Head from 'next/head'
import SidebarLayout from 'components/SidebarLayout'
import JobList from 'components/JobList'
import SITE from 'config/site'

export default function Home() {
  return (
    <SidebarLayout>
      <div className="flex-col flex-1">
        <JobList />
      </div>
    </SidebarLayout>
  )
}
