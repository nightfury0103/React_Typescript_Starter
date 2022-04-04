import React from 'react'
import classNames from 'classnames'

import { MMenus } from '@root/constants'
import HeaderSocial from './HeaderSocial'

interface Props {
  opened?: boolean
}

const MobileMenu: React.FC<Props> = ({ opened }) => {
  return (
    <div className={classNames('main-menu', opened && 'open')}>
      <div className="scroll-wrap">
        <div className="menu-wrap">
          {Object.entries(MMenus).map(([group, menu]) => {
            if (group === 'general') {
              return (
                <div key={group} className="menu-item">
                  <ul>
                    {menu.map((_menu, index) => (
                      <li key={`${group}_m_menu_${index}`}>
                        <a href={_menu.link}>
                          <span className="name">{_menu.name}</span>
                          <span className="label label-background">
                            {_menu.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
            if (group === 'external') {
              return (
                <div key={group} className="extra-links">
                  <ul>
                    {menu.map((_menu, index) => (
                      <li key={`${group}_m_menu_${index}`}>
                        <a href={_menu.link}>{_menu.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
            return (
              <div key={group} className="info-box">
                {group === 'info' && (
                  <div className="contacts-box">
                    <ul>
                      {menu.map((_menu, index) => (
                        <li key={`${group}_m_menu_${index}`}>
                          <a href={_menu.link}>{_menu.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <HeaderSocial />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
