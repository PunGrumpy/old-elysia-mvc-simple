import prisma from '../lib/prisma'

const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  return users
}

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      posts: true
    }
  })
  return user
}

export { getAllUsers, getUserById }
