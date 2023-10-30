import { route as UserRoute } from './user/route'
import { CreateElysia } from '../../utils/elysia'

const route = CreateElysia({ prefix: '/api' }).use(UserRoute)

export { route as APIRoute }
