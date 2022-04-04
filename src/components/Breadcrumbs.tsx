import React from 'react'

interface Props {
  text: string
  link?: string
}

const Breadcrumbs: React.FC<Props> = ({ text, link = '#' }) => {
  return (
    <div className="breadcrumbs">
      <a href={link}>
        <span className="icon-arrow"></span>
        <u>{text}</u>
      </a>
    </div>
  )
}

export default Breadcrumbs
