import { FC, HTMLAttributes } from 'react'

import classes from '@/classes'

import styles from './Loader.module.css'

export type LoaderProps = HTMLAttributes<HTMLSpanElement>

const Loader: FC<LoaderProps> = ({ className, ...props }) => (
  <span className={classes(styles.Loader, className)} {...props} />
)

export default Loader
