import { config } from '~/config'

import {
  fakeApiPostRepository,
  memoryPostRepository,
  PostRepository,
} from './post'

export type RepositoryType = 'memory' | 'fake_api'
export const postRepositoryType: RepositoryType =
  (import.meta.env.VITE_POST_REPOSITORY as RepositoryType) || 'memory'

export type Repositories = {
  posts: PostRepository
}

export const repos: Repositories = {
  posts:
    postRepositoryType === 'fake_api'
      ? fakeApiPostRepository(config)
      : memoryPostRepository(config),
}
