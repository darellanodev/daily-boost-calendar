import React from 'react'
import './button.css'

interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'disabled'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button = ({
  mode = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  type = 'button',
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
      {label}
    </button>
  )
}
