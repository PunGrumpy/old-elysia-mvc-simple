import '../src/env' // validate environment variables
import { APIRoute } from '../src/api'

export const config = { runtime: 'edge' }

export default async function handler(request: Request) {
  return APIRoute.fetch(request)
}
