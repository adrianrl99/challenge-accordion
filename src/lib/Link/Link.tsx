import { FC } from 'react'
import { Link as RouteLink, LinkProps, useLocation } from 'react-router-dom'

import classes from '@/classes'
import { langInPathname } from '~/utils/helper'

import styles from './Link.module.css'

const Link: FC<LinkProps> = ({ className, to, ...props }) => {
  const location = useLocation()
  const paramsLang = langInPathname(location.pathname)
  const lang = paramsLang ? `/${paramsLang}` : ''

  return (
    <RouteLink
      className={classes(styles.Link, className)}
      to={`${lang}${to}`}
      {...props}
    />
  )
}

export default Link
