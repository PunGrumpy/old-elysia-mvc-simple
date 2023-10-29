import '../src/env' // validate environment variables
import { app } from '../src/api'

export const config = { runtime: 'edge' }

export default async function handler(request: Request) {
  return app.fetch(request)
}
