import { FC, HTMLAttributes } from 'react'

import classes from '@/classes'

import styles from './Paper.module.css'

export type PaperProps = HTMLAttributes<HTMLDivElement>

const Paper: FC<PaperProps> = ({ children, className, ...props }) => (
  <div className={classes(styles.Paper, className)} {...props}>
    {children}
  </div>
)

export default Paper
