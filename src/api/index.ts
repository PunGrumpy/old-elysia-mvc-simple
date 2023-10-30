import swagger from '@elysiajs/swagger'
import { route as UserRoute } from './user/route'
import { CreateElysia } from '../utils/elysia'

const APIRoute = CreateElysia()
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
  .use(UserRoute)

export { APIRoute }
