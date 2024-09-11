import React from 'react'
import './button.css'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type = 'button',
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      type={type}
      {...props}
    >
      {label}
    </button>
  )
}
