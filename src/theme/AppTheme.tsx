import { FC, useCallback, useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil'

import { useMediaQuery } from '@/useMediaQuery'
import { themeState } from '~/state'

import styles from './AppTheme.module.css'

export type Theme = 'dark' | 'light' | 'system'

export const Themes: Theme[] = ['dark', 'light', 'system']

const AppTheme: FC = ({ children }) => {
  const [theme] = useRecoilState(themeState)

  const match = useMediaQuery('(prefers-color-scheme: dark)')

  const changeTheme = useCallback((theme: boolean) => {
    const html = document.querySelector('html')

    theme ? html?.classList.add('dark') : html?.classList.remove('dark')
  }, [])

  useLayoutEffect(() => {
    theme === 'system' ? changeTheme(match) : changeTheme(theme === 'dark')
  }, [theme, changeTheme, match])

  return <div className={styles.AppTheme}>{children}</div>
}

export default AppTheme
