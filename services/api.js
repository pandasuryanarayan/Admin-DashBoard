// api.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
// To run in local machine, proxy is needed to restrict CORS.
// You can implement your Proxy Server or use "https://thingproxy.freeboard.io/fetch/" free proxy server for testing and development.
// Uncomment below code to use in development and testing.
const apiUrl = `https://thingproxy.freeboard.io/fetch/${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API}`;
// const apiUrl = `${process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_API}`;

// Fetch all data from the dashboard API
export function useDashboardData() {
  const { data, error, mutate } = useSWR(apiUrl, fetcher);
  return { data, error, mutate };
}
