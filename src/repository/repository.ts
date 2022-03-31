import { config } from '~/config'

import { memoryPostRepository, PostRepository } from './post'

export type Repositories = {
  posts: PostRepository
}

export const repos: Repositories = {
  posts: memoryPostRepository(config),
}
