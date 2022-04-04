/* eslint-disable no-unused-vars */
import React from 'react'

interface Props {
  children: React.ReactNode
  name?: string
  value?: any
  onChange: (v: any) => void
}

const RadioGroup: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default RadioGroup
