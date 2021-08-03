import Head from 'next/head'
import SidebarLayout from 'components/SidebarLayout'
import Image from 'next/image'
import SITE from 'config/site'

export default function Home() {
  return (
    <SidebarLayout>
      <h1>Welcome to {SITE.name}</h1>
    </SidebarLayout>
  )
}
