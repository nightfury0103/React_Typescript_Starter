import React, { useState } from 'react'
import classnames from 'classnames'

import { AppLogo, Container } from '..'
import MenuToggleButton from './MenuToggleButton'
import NavRight from './NavRight'
import UserNav from './UserNav'
import MobileMenu from './MobileMenu'

interface Props {
  className?: string
  headerLogoStatus?: boolean
}

const Header: React.FC<Props> = ({ className, headerLogoStatus }) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <header>
      <Container>
        <div className="toolbar-wrap">
          <MenuToggleButton opened={menuOpened} onToggle={setMenuOpened} />
          <NavRight />
          <AppLogo
            className={classnames(className)}
            headerLogoStatus={headerLogoStatus}
          />
          <UserNav className={classnames(className)} />
        </div>
        <MobileMenu opened={menuOpened} />
      </Container>
    </header>
  )
}

export default Header
