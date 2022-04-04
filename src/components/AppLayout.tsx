import React from 'react'
import classnames from 'classnames'

import { Header, Footer } from '@components/index'
import { ContactUs } from '@components/index'

interface Props {
  children: React.ReactNode
  className?: string
  headerStatus?: string
  headerLogoStatus?: boolean | false
  footerStatus?: string
}

const AppLayout: React.FC<Props> = ({
  children,
  className,
  headerStatus,
  headerLogoStatus,
  footerStatus,
}) => {
  return (
    <div>
      <Header
        className={classnames(headerStatus)}
        headerLogoStatus={headerLogoStatus}
      />
      <div className={classnames('content-wrap', className)}>
        <ContactUs />
        <div className="container">{children}</div>
      </div>
      <Footer className={classnames(footerStatus)} />
    </div>
  )
}
export default AppLayout
