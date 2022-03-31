import { FC } from 'react'

import classes from '@/classes'

import styles from './Divider.module.css'

export type DividerProps = {
  direction?: 'horizontal' | 'vertical'
  color?: 'success' | 'warning' | 'info' | 'error' | 'primary'
  className?: string
}

const Divider: FC<DividerProps> = ({
  direction = 'horizontal',
  color = 'primary',
  className,
}) => (
  <div
    className={classes(
      styles.Divider,
      styles[`Divider_${direction}`],
      styles[`Divider_${color}`],
      className,
    )}
  />
)

export default Divider
