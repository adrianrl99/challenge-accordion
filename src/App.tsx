import { FC } from 'react'

import { Container } from '@/Container'

import styles from './App.module.css'
import { AccordionPosts } from './components/AccordionPosts'
import AppTheme from './theme'

export const App: FC = () => (
  <AppTheme>
    <Container>
      <div className={styles.App}>
        <AccordionPosts />
      </div>
    </Container>
  </AppTheme>
)
