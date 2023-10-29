import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { getAllUsers, getUserById } from './controller/user'

const app: Elysia = new Elysia()
  .use(swagger())
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
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
