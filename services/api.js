// api.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API}`;

// Fetch all data from the dashboard API
export function useDashboardData() {
  const { data, error, mutate } = useSWR(apiUrl, fetcher);
  return { data, error, mutate };
}
