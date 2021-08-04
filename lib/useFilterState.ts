import { useRouter } from 'next/router'

export default function useFilterState() {
  // Use the URL to store query state
  const router = useRouter()
  const { query } = router
  const q = query.q?.toString()
  const selectedTypes = (query.type?.toString() || '').split(',').filter(x => !!x)

  return {
    q,
    types: selectedTypes
  }
}
