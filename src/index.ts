import { env } from './env'
import { app } from './app'
import { CreateElysia } from './utils/elysia'
import { contextRequest } from './utils/contextRequest'

const server = CreateElysia()
  .derive(ctx => contextRequest(ctx.request))
  .use(app)

server.listen({ port: env.PORT }, ({ hostname, port }) => {
  const url = env.NODE_ENV === 'production' ? 'https' : 'http'
  process.stdout.write('\x1Bc')

  const message = `🦊 Elysia is running at ${url}://${hostname}:${port}`
  const title = `Elysia v${env.ELYSIA_VERSION}`
  const boxWidth = Math.max(message.length, title.length) + 4
  const border = '─'.repeat(boxWidth)

  const centerPad = (text: string) => {
    const padding = ' '.repeat((boxWidth - text.length) / 2)
    return `${padding}${text}${padding}`
  }

  console.log(`
  ┌${border}┐
  │${centerPad('')} │
  │${centerPad(title)}│
  │${centerPad('')} │
  │${centerPad(message)}│
  │${centerPad('')} │
  └${border}┘
  `)
})
