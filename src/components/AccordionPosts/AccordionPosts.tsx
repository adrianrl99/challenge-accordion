import { useEffect, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { Accordion } from '@/Accordion'
import Button from '@/Button'
import { config } from '~/config'
import { repos } from '~/repository'
import { accordionPostCountState, accordionPostsState } from '~/state'

import styles from './AccordionPosts.module.css'

export const AccordionPosts = () => {
  const [posts, setPosts] = useRecoilState(accordionPostsState)
  const [count, setCount] = useRecoilState(accordionPostCountState)

  const allExpanded = useMemo(
    () =>
      posts.slice(0, count).filter(({ expanded }) => expanded).length ===
      config.maxExpandedPanelCount,
    [count, posts],
  )
  const allCollapsed = useMemo(
    () => posts.slice(0, count).every(({ expanded }) => !expanded),
    [count, posts],
  )
  const canShowLess = useMemo(() => config.minPanelCount < count, [count])
  const canShowMore = useMemo(() => config.maxPanelCount > count, [count])
  const canForceExpand = useMemo(() => config.maxExpandedPanelCount === 1, [])
  const canExpand = useMemo(() => {
    if (config.maxExpandedPanelCount === -1) return true
    if (config.maxExpandedPanelCount === 0) return false
    return (
      posts.filter(post => post.expanded).length < config.maxExpandedPanelCount
    )
  }, [posts])

  const handleCollapse = (id: string | number) =>
    setPosts(
      posts.map(post => (post.id !== id ? post : { ...post, expanded: false })),
    )

  const handleExpand = (id: string | number) => {
    if (!canForceExpand && canExpand) {
      setPosts(
        posts.map(post =>
          post.id !== id ? post : { ...post, expanded: true },
        ),
      )
    } else if (canForceExpand) {
      const lastExpandId = posts.filter(post => post.expanded).at(-1)?.id
      setPosts(
        posts.map(post => {
          if (post.id === lastExpandId) {
            return { ...post, expanded: false }
          } else if (post.id === id) {
            return { ...post, expanded: true }
          }

          return post
        }),
      )
    }
  }

  const handleShowMore = () => canShowMore && setCount(count + 1)
  const handleShowLess = () => {
    if (canShowLess) {
      setPosts([
        ...posts.slice(0, count - 1),
        {
          ...posts[count - 1],
          expanded: false,
        },
        ...posts.slice(count),
      ])

      setCount(count - 1)
    }
  }

  const handleCollapseAll = () =>
    setPosts(posts.map(post => ({ ...post, expanded: false })))
  const handleExpandAll = () => {
    if (canExpand && !canForceExpand) {
      const showedPosts = posts.slice(0, count).map(post => ({
        ...post,
        expanded: true,
      }))

      setPosts([...showedPosts, ...posts.slice(count)])
    } else if (canExpand && canForceExpand) {
      const showedPosts = posts.slice(0, count).map((post, index) => ({
        ...post,
        expanded: config.maxExpandedPanelCount > index,
      }))

      setPosts([...showedPosts, ...posts.slice(count)])
    }
  }

  useEffect(() => {
    repos.posts.getAll().then(posts =>
      setPosts(
        posts.map((post, index) => ({
          ...post,
          expanded: config.initialExpandedPanel === index,
        })),
      ),
    )
  }, [setPosts])

  return (
    <div className={styles.AccordionPosts}>
      <div className={styles.AccordionPosts_header}>
        <h1>Accordion</h1>
        <div className={styles.AccordionPosts_header_actions}>
          <Button
            disabled={allCollapsed}
            variant="text"
            onClick={handleCollapseAll}
          >
            Collapse all
          </Button>
          <Button
            disabled={allExpanded}
            variant="text"
            onClick={handleExpandAll}
          >
            Expand all
          </Button>
        </div>
      </div>
      {posts.slice(0, count).map(post => (
        <Accordion
          key={post.id}
          expanded={post.expanded}
          title={post.title}
          body={post.body}
          id={post.id}
          onCollapse={handleCollapse}
          onExpand={handleExpand}
        />
      ))}
      <div className={styles.AccordionPosts_actions}>
        <Button disabled={!canShowLess} variant="text" onClick={handleShowLess}>
          Show less
        </Button>
        <Button disabled={!canShowMore} variant="text" onClick={handleShowMore}>
          Show more
        </Button>
      </div>
    </div>
  )
}
