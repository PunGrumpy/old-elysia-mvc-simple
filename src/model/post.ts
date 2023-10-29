import { User } from './user'

export interface Post {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
  published: boolean
  viewCount: number
  author: User | null
  authorId: number | null
}
