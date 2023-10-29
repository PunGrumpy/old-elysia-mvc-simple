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

const createUser = async (body: any) => {
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })
  return user
}

const updateUser = async (id: string, body: any) => {
  const user = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: {
      name: body.name,
      email: body.email
    }
  })
  return user
}

export { getAllUsers, getUserById, createUser, updateUser }
