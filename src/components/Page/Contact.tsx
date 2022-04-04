import React from 'react'

import { CONTACT_EMAIL, CONTACT_PHONE } from '@root/constants'
import HeaderSocial from './HeaderSocial'

const Contact: React.FC = () => {
  return (
    <div className="item-box">
      <div className="contacts-box">
        <h3>
          ונתיא ורבד<span>💚</span>
        </h3>
        <ul>
          <li>
            <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
          </li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
        </ul>
      </div>
      <HeaderSocial />
    </div>
  )
}

export default Contact
