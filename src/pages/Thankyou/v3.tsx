import React from 'react'

import { AppLayout } from '@components/index'
import { Input } from '@components/Form'

import './style.css'

const ThankyouV3: React.FC = () => {
  return (
    <AppLayout className="thanks-box" footerStatus="footer-status">
      <div className="box-bg">
        <div className="container">
          <div className="box-content">
            <div className="content-title">
              <h1>
                <i>Thanks Gorgeous!</i> <span>🤘</span>
              </h1>
              <p>
                רשק ךתיא רוצינ ונחנא .החלצהב הלבקתה ךלש הנמזההש ףיכ הזיא .ךילא
                ונחלשש ליימב םיאצמנ םיטרפה לכ .תובורקה תועשב
              </p>
            </div>
            <div className="content-text">
              <div className="form-title">
                <h3>?ונילע תעדל בייחש והשימ הריכמ תא ,םייתנבו</h3>
              </div>

              <div className="form-fields with-btn">
                <div className="submit-btn">
                  <button type="button" className="main-btn pink">
                    <span className="dt-only">
                      <i>Sharing is caring</i>
                    </span>
                    <span className="mb-only">
                      <i>
                        <i>Share</i>
                      </i>
                    </span>
                  </button>
                </div>
                <label className="full-size">
                  <span className="field">
                    <Input
                      type="email"
                      placeholder="Email"
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
                <p>תיבה ףדל הרזח</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ThankyouV3
