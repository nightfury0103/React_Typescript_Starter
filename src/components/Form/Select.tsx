/* eslint-disable no-unused-vars */
import React from 'react'
import classnames from 'classnames'

interface Props {
  id?: string
  value?: string | number
  onChange: (v?: string) => void
  disabled?: boolean
  selected?: boolean
  className?: string
  children: string[]
}

const SelectComponent: React.FC<Props> = ({
  id,
  value,
  onChange,
  disabled,
  selected,
  className,
  children,
}) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e): void => onChange(e.target.value)}
      className={classnames(className)}
    >
      {children.map((v, index) => (
        <option value={v} key={index} disabled={disabled} selected={selected}>
          {v}
        </option>
      ))}
    </select>
  )
}

export default SelectComponent
