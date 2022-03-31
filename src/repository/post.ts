import mockPost from '#/posts.json'
import { Config } from '~/config'
import { Post } from '~/models'

const posts = [...mockPost]

export type PostRepository = {
  getAll: () => Promise<Post[]>
}

export const memoryPostRepository = (config: Config): PostRepository => ({
  getAll: async () => posts.slice(0, config.fetchCount),
})

export const fakeApiPostRepository = (config: Config): PostRepository => ({
  getAll: async () =>
    (
      await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${config.fetchCount}`,
      )
    ).json(),
})
