import { env } from '../env'

const contextRequest = (request: Request) => {
  if (env.NODE_ENV !== 'production' || env.RUNTIME === 'edge') {
    return {}
  }

  const httpsURL = request.url.replace('http://', 'https://')

  const newRequest = new Request(httpsURL, {
    body: request.body,
    headers: request.headers,
    method: request.method,
    cache: request.cache,
    credentials: request.credentials,
    integrity: request.integrity,
    keepalive: request.keepalive,
    mode: request.mode,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    signal: request.signal
  })

  return { request: newRequest }
}

export { contextRequest }
