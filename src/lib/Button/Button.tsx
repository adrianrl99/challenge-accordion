import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import classes from '@/classes'
import Loader from '@/Loader'

import styles from './Button.module.css'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

export type ButtonVariant = 'contained' | 'outlined' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor
  loading?: boolean
  variant?: ButtonVariant
  fullWith?: boolean
  size?: ButtonSize
  active?: boolean
  icon?: ReactNode
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  fullWith = false,
  active = false,
  loading = false,
  icon,
  className,
  children,
  ...props
}) => (
  <button
    className={classes(
      styles.Button,
      styles[`Button_${color}`],
      styles[`Button_${variant}`],
      styles[`Button_${size}`],
      {
        [styles.Button_loading]: loading,
        [styles.Button_fullWidth]: fullWith,
        [styles.Button_active]: active,
      },
      className,
    )}
    type="button"
    {...props}
  >
    {loading ? (
      <Loader />
    ) : (
      <>
        {icon}
        {children && <span>{children}</span>}
      </>
    )}
  </button>
)

export default Button
