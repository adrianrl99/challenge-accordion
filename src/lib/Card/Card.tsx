import { FC, HTMLAttributes } from 'react'

import classes from '@/classes'
import stylesPaper from '@/Paper/Paper.module.css'

import styles from './Card.module.css'

export type CardProps = HTMLAttributes<HTMLDivElement>

const Card: FC<CardProps> = ({ children, className, ...props }) => (
  <div
    className={classes(stylesPaper.Paper, styles.Card, className)}
    {...props}
  >
    {children}
  </div>
)

export default Card
