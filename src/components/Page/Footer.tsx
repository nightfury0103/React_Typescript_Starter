import React from 'react'
import classnames from 'classnames'

import Contact from './Contact'
import FooterSocial from './FooterSocial'

interface Props {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={classnames(className)}>
      <div className="container">
        <div className="toolbar-wrap">
          <FooterSocial />
          <Contact />
        </div>

        <div className="bottom-text">
          <p>תויטרפ תוינידמ | רתאה ןונקתו שומיש יאנת</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
