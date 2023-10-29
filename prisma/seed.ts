import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    posts: {
      create: [
        {
          title: 'Announcing to users',
          content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          published: true
        }
      ]
    }
  },
  {
    name: 'Alice',
    email: 'alice@pingcap.com',
    posts: {
      create: [
        {
          title: 'Join the TiDB Cloud',
          content: 'https://www.pingcap.com/tidb-cloud',
          published: true
        }
      ]
    }
  },
  {
    name: 'Nilu',
    email: 'nilu@pingcap.com',
    posts: {
      create: [
        {
          title: 'Follow PingCAP on Twitter',
          content: 'https://twitter.com/PingCAP',
          published: true
        }
      ]
    }
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@pingcap.com',
    posts: {
      create: [
        {
          title: 'Ask a question on our Forums',
          content: 'https://internals.tidb.io',
          published: true
        },
        {
          title: 'TiDB on GitHub',
          content: 'https://github.com/pingcap/tidb'
        }
      ]
    }
  }
]

async function createUserIfNotExists(user: Prisma.UserCreateInput) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email
    }
  })

  if (!existingUser) {
    const createdUser = await prisma.user.create({
      data: user
    })
    console.log(`Created user with id: ${createdUser.id}`)
  } else {
    console.log(`User with email ${user.email} already exists, skipping.`)
  }
}

async function main() {
  console.log(`Start seeding ...`)
  try {
    for (const u of userData) {
      await createUserIfNotExists(u)
    }
    console.log(`Seeding finished.`)
  } catch (e) {
    console.error('Unable to seed database', e)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
