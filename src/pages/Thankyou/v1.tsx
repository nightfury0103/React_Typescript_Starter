import React from 'react'

import { AppLayout } from '@components/index'
import { Input, Button } from '@components/Form'

import './style.css'

const ThankyouV1: React.FC = () => {
  return (
    <AppLayout className="thanks-box" footerStatus="footer-status">
      <div className="box-bg">
        <div className="container">
          <div className="box-content">
            <div className="content-title">
              <h1>
                <i>Not again</i> <span>🙃</span>
              </h1>
              <p>המסיס סופיאל רושיק ךילא חלשנו ל״אודה תבותכ תא יניזה</p>
            </div>
            <div className="content-text">
              <div className="form-fields">
                <label className="full-size">
                  <span className="field">
                    <Input
                      type="email"
                      placeholder="You’re Email"
                      onChange={() => {
                        return
                      }}
                    />
                  </span>
                  <span className="warning">
                    םודאב הדשה תחת עיפוי היצדילו טסקט
                  </span>
                </label>
              </div>

              <div className="submit-btn">
                <Button
                  type="button"
                  className="main-btn pink"
                  children="Send"
                  onClick={() => {
                    return
                  }}
                />
                <p>הרזח</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ThankyouV1
