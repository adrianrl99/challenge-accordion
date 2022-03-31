import { FC, HTMLAttributes } from 'react'

import classes from '@/classes'

import styles from './Container.module.css'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={classes(styles.Container, className)} {...props}>
    {children}
  </div>
)
