import { Post } from './post'

export interface User {
  id: number
  email: string
  name: string | null
  posts: Post[]
}
