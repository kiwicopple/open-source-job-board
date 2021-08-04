import { useRouter } from 'next/router'

export default function useFilterState() {
  // Use the URL to store query state
  const router = useRouter()
  const { query } = router

  function paramToArray(queryParam: string | string[] | undefined) {
    return (queryParam?.toString() || '').split(',').filter((x) => !!x)
  }

  return {
    q: query.q?.toString(),
    types: paramToArray(query.type),
    departments: paramToArray(query.department),
  }
}
