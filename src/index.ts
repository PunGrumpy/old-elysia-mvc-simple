import swagger from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser
} from './controller/user'

const app: Elysia = new Elysia()
  .use(
    swagger({
      exclude: ['/swagger', '/'],
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
  .get('/', ({ set }) => (set.redirect = '/swagger'))
  .get('/users', async ({ set }) => {
    try {
      const users = await getAllUsers()
      if (!users) {
        set.status = 404
        return { status: 'error', response: 'Not Found' }
      }
      return { status: 'success', response: users }
    } catch (e) {
      set.status = 500
      return { status: 'error', response: 'Internal Server Error' }
    }
  })
  .get('/users/:id', async ({ params: { id }, set }) => {
    try {
      const user = await getUserById(id)
      if (!user) {
        set.status = 404
        return { status: 'error', response: 'Not Found' }
      }
      return { status: 'success', response: user }
    } catch (e) {
      set.status = 500
      return { status: 'error', response: 'Internal Server Error' }
    }
  })
  .post(
    '/users',
    async ({ body, set }) => {
      try {
        const user = await createUser(body)
        return { status: 'success', response: user }
      } catch (e) {
        set.status = 500
        return { status: 'error', response: 'Internal Server Error' }
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String()
      })
    }
  )
  .put(
    '/users/:id',
    async ({ params: { id }, body, set }) => {
      try {
        const user = await updateUser(id, body)
        return { status: 'success', response: user }
      } catch (e) {
        set.status = 500
        return { status: 'error', response: 'Internal Server Error' }
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String()
      })
    }
  )
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
