import swagger from '@elysiajs/swagger'
import { CreateElysia } from '../utils/elysia'
import { APIRoute } from './api/route'

const app = CreateElysia()
  .use(
    swagger({
      exclude: ['/swagger'],
      autoDarkMode: true,
      documentation: {
        info: {
          title: '🦊 Elysia MVC Simple',
          description: 'Simple MVC pattern for ElysiaJS with User and Post',
          version: '1.0.0',
          license: {
            name: 'MIT',
            url: 'https://opensource.org/license/mit/'
          },
          contact: {
            name: 'PunGrumpy',
            url: 'https://pungrumpy.com'
          }
        }
      }
    })
  )
  .use(APIRoute)

export { app }
