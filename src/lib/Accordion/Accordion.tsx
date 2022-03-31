import { FC, ReactNode } from 'react'

import stylesCard from '@/Card/Card.module.css'
import classes from '@/classes'

import styles from './Accordion.module.css'

export type AccordionProps = {
  expanded: boolean
  onExpand: (id: string | number) => void
  onCollapse: (id: string | number) => void
  id: string | number
  title: ReactNode
  body?: ReactNode
  className?: string
}

export const Accordion: FC<AccordionProps> = ({
  body,
  className,
  expanded,
  onCollapse,
  onExpand,
  id,
  title,
}) => (
  <div
    className={classes(stylesCard.Card, styles.Accordion, className, {
      [styles.Accordion_expanded]: expanded,
    })}
  >
    <button
      className={styles.Accordion_title}
      onClick={() => (expanded ? onCollapse(id) : onExpand(id))}
    >
      {title}
    </button>
    {body && <div className={styles.Accordion_body}>{body}</div>}
  </div>
)
