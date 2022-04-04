import React from 'react'

import Logo from '@assets/images/logo.svg'
import { Input } from '@components/Form'

const FooterSocial: React.FC = () => {
  return (
    <div className="item-box">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="text-box">
        <p>
          המו ונחנא ימ םיראתמש םירצק םיינש וא טפשמ
          <br />
          .ועדיש םלוכל ריבסהל בושח יכ המלו ונחא
        </p>
        <p>:ליימב םינוכדע תלבקל</p>
      </div>
      <div className="subscribe-box">
        <form>
          <label>
            <Input
              type="email"
              onChange={() => {
                return
              }}
            />
          </label>
          <button type="button">
            <span className="icon-down"></span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default FooterSocial
