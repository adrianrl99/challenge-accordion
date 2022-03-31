import { FC, HTMLAttributes } from 'react'

import classes from '@/classes'

import styles from './Dot.module.css'

export type DotColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'transparent'

export type DotSize = 'small' | 'medium' | 'large'

interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  size?: DotSize
  color?: DotColor
}

const Dot: FC<DotProps> = ({
  size = 'medium',
  color = 'primary',
  className,
  ...props
}) => (
  <span
    className={classes(
      styles.Dot,
      styles[`Dot_${size}`],
      styles[`Dot_${color}`],
      className,
    )}
    {...props}
  />
)

export default Dot
