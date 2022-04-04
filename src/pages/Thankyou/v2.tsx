import React from 'react'

import { AppLayout } from '@components/index'
import { Button } from '@components/Form'

import './style.css'

const ThankyouV2: React.FC = () => {
  return (
    <AppLayout className="thanks-box" footerStatus="footer-status">
      <div className="box-bg pink">
        <div className="container">
          <div className="box-content">
            <div className="content-title">
              <h1>
                <i>Thank you!</i> <span>🍿</span>
              </h1>
              <p>
                .םיטרפה לכ םע ליימ ונתיאמ ולבקת בורקב
                <br />
                .החלצהב ונילא חלשנ ספוטהש ףיכ הזיא
              </p>
            </div>
            <div className="content-text">
              <div className="submit-btn">
                <Button
                  type="button"
                  className="main-btn"
                  children="םייתנב יל םמעשמ"
                  onClick={() => {
                    return
                  }}
                />
                <p>הרזחתיבה ףדל הרזח</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ThankyouV2
