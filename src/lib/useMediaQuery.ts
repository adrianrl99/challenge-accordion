import { useCallback, useLayoutEffect, useState } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type BreakpointDirection = 'up' | 'down' | 'only' | 'not'

export const breakpointsValues: Record<Breakpoint, [number, number]> = {
  xs: [0, 576],
  sm: [576, 768],
  md: [768, 992],
  lg: [992, 1200],
  xl: [1200, 1400],
  xxl: [1400, Infinity],
}

export const breakpoints = {
  up: (breakpoint: Breakpoint) =>
    `(min-width: ${breakpointsValues[breakpoint][0]}px)`,
  down: (breakpoint: Breakpoint) =>
    `(max-width: ${breakpointsValues[breakpoint][1]}px)`,
  only: (breakpoint: Breakpoint) =>
    `(min-width: ${breakpointsValues[breakpoint][0]}px) and (max-width: ${breakpointsValues[breakpoint][1]}px)`,
  not: (breakpoint: Breakpoint) =>
    `(max-width: ${breakpointsValues[breakpoint][0]}px), (min-width: ${breakpointsValues[breakpoint][1]}px)`,
  between: (start: Breakpoint, end: Breakpoint) =>
    `(min-width: ${breakpointsValues[start][0]}px) and (max-width: ${breakpointsValues[end][1]}px)`,
}

export type Listener = (this: Window, listener: UIEvent) => void

type MediaQueryEvent = 'addResize' | 'removeResize'
type MediaQueryEvents = Record<MediaQueryEvent, (listener: Listener) => void>
const mediaQueryEvents: MediaQueryEvents = {
  addResize: listener => window.addEventListener('resize', listener),
  removeResize: listener => window.removeEventListener('resize', listener),
}

export type UseMediaQuery = (query: string) => boolean
export const useMediaQuery: UseMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false)

  const handleMatch = useCallback(
    () => setMatch(window.matchMedia(query).matches),
    [query],
  )

  useLayoutEffect(() => {
    const events: MediaQueryEvent[] = []

    if (query.includes('width') || query.includes('height')) {
      events.push('addResize')
    }

    handleMatch()

    if (events.length)
      events.forEach(event => mediaQueryEvents[event](handleMatch))

    return () => {
      const events: MediaQueryEvent[] = []

      if (query.includes('width') || query.includes('height')) {
        events.push('removeResize')
      }

      if (events.length)
        events.forEach(event => mediaQueryEvents[event](handleMatch))
    }
  }, [handleMatch, query])

  return match
}
