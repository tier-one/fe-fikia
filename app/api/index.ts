export default async function apiQuery(url: string, method: string, data?: object, revalidate?: number) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

  const res = await fetch(`${backendUrl}/${url}`, {
    method,
    headers: method === 'POST' || 'PATCH' || 'GET' ? {
      'Content-Type': 'application/json',
      'accept': '*/*',
    } : undefined,
    body: method === 'POST' || 'PATCH' ? JSON.stringify(data) : undefined,
    next: { revalidate }
  } );
  return res.json();
}