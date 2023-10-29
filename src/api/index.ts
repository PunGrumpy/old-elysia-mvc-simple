import swagger from '@elysiajs/swagger'
import { routes as UserAPIRoute } from './user'
import { CreateElysia } from '../utils/elysia'

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
          }
        }
      }
    })
  )
  .use(UserAPIRoute)

export { app }
