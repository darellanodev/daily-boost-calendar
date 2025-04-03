import React from 'react'
import { FaUnlock, FaUserPlus } from 'react-icons/fa'
import './button.css'

interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'disabled'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
  icon?: React.ReactNode
}

export const Button = ({
  mode = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  type = 'button',
  icon = null,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button--${mode}`,
      ].join(' ')}
      style={{ backgroundColor }}
      type={type}
      {...props}
    >
      {icon !== null ? (
        <>
          {icon} {label}
        </>
      ) : (
        label
      )}
    </button>
  )
}
