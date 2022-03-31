import { atom, AtomEffect } from 'recoil'

import { config } from '~/config'
import { AccoirdionPost } from '~/models'
import { Theme } from '~/theme'

type LocalStorageEffect = <T>(key: string) => AtomEffect<T>

const localStorageEffect: LocalStorageEffect =
  key =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'system',
  effects: [localStorageEffect('theme')],
})

export const accordionPostsState = atom<AccoirdionPost[]>({
  key: 'accordionPostsState',
  default: [],
  effects: [localStorageEffect('accordionPosts')],
})

export const accordionPostCountState = atom<number>({
  key: 'accordionPostCountState',
  default: config.initialPanelCount,
})
