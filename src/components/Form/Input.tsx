/* eslint-disable no-unused-vars */
import React from 'react'

interface Props {
  type?: 'text' | 'checkbox' | 'radio' | 'email' | 'password'
  value?: number | string
  name?: string
  onChange: (v?: string) => void
  disabled?: boolean
  placeholder?: string
}

const Input: React.FC<Props> = ({
  type,
  value,
  name,
  onChange,
  disabled,
  placeholder,
}) => {
  return (
    <input
      type={type || 'text'}
      value={value}
      name={name}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
    />
  )
}

export default Input
