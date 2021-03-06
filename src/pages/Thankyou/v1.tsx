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
                <i>Not again</i> <span>馃檭</span>
              </h1>
              <p>讛诪住讬住 住讜驻讬讗诇 专讜砖讬拽 讱讬诇讗 讞诇砖谞讜 诇状讗讜讚讛 转讘讜转讻 转讗 讬谞讬讝讛</p>
            </div>
            <div className="content-text">
              <div className="form-fields">
                <label className="full-size">
                  <span className="field">
                    <Input
                      type="email"
                      placeholder="You鈥檙e Email"
                      onChange={() => {
                        return
                      }}
                    />
                  </span>
                  <span className="warning">
                    诐讜讚讗讘 讛讚砖讛 转讞转 注讬驻讜讬 讛讬爪讚讬诇讜 讟住拽讟
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
                <p>讛专讝讞</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ThankyouV1
