import React from 'react'
import classnames from 'classnames'

import Logo from '@assets/images/logo.svg'
import Fiverr from '@assets/images/logo-fiverr.svg'

interface Props {
  className?: string
  headerLogoStatus?: boolean
}

const AppLogo: React.FC<Props> = ({ className, headerLogoStatus }) => (
  <div className={classnames('logo long', className)}>
    <a href="/">
      {headerLogoStatus ? (
        <img src={Fiverr} alt="" />
      ) : (
        <img src={Logo} alt="" />
      )}
    </a>
  </div>
)

export default AppLogo
