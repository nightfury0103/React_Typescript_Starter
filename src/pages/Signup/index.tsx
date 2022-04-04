import React from 'react'

import { AppLayout } from '@components/index'
import { Input, Button, Select } from '@components/Form'

import { SelectValue, InputGroupValue } from '@root/constants'

import './style.css'

const Signup: React.FC = () => {
  return (
    <AppLayout className="signup-box" footerStatus="footer-status">
      <div className="signup-content">
        <div className="content-title">
          <h1>
            <i>Let’s take it to the next level</i>
          </h1>
          <p>
            .ינפל םכמ לבקל הצרנש םיטרפ המכ שי לבא ,אבה בלשל םדקתהל תונכומ ירמגל
            ונחנא !בורקב שממ םכלש םירבח תויהל וליפא ילואו ריכהל חמשנו הטמ רצרצקה
            ספוטה תא ואלמ
          </p>
        </div>
        <div className="content-text">
          <div className="form-section">
            <h3>
              <span>
                <b>רשקה שיא יטרפ</b>
              </span>
            </h3>
          </div>
          <div className="form-fields">
            {InputGroupValue.map((item, index) => (
              <label className="third-size" key={index}>
                <span className="field">
                  <Input
                    type="text"
                    placeholder={item.placeholder}
                    onChange={() => {
                      return
                    }}
                  />
                </span>
                <span className="warning">{item.warning}</span>
              </label>
            ))}
          </div>

          <div className="form-section">
            <h3>
              <span>
                <b>הרבחה יטרפ</b>
              </span>
            </h3>
          </div>

          <div className="form-fields">
            <label className="third-size">
              <span className="field select">
                <Select
                  children={SelectValue}
                  disabled={false}
                  selected={true}
                  onChange={() => {
                    return
                  }}
                />
              </span>
            </label>
            <label className="third-size">
              <span className="field">
                <Input
                  type="text"
                  placeholder="םידבוע רפסמ"
                  onChange={() => {
                    return
                  }}
                />
              </span>
              <span className="warning">םודאב הדשה תחת עיפוי היצדילו טסקט</span>
            </label>
            <label className="third-size">
              <span className="field select">
                <Select
                  children={SelectValue}
                  disabled={false}
                  selected={true}
                  onChange={() => {
                    return
                  }}
                />
              </span>
            </label>
            <label className="third-size">
              <span className="field">
                <Input
                  type="text"
                  placeholder="תבותכ"
                  onChange={() => {
                    return
                  }}
                />
              </span>
              <span className="warning">םודאב הדשה תחת עיפוי היצדילו טסקט</span>
            </label>
            <label className="third-size">
              <span className="field">
                <Input
                  type="text"
                  placeholder="טנרטניא רתא"
                  onChange={() => {
                    return
                  }}
                />
              </span>
              <span className="warning">םודאב הדשה תחת עיפוי היצדילו טסקט</span>
            </label>
            <label className="third-size">
              <span className="field select">
                <Select
                  children={SelectValue}
                  disabled={false}
                  selected={true}
                  onChange={() => {
                    return
                  }}
                />
              </span>
            </label>
            <label className="full-size">
              <span className="field">
                <textarea>?ונל רפסל וצרתש והשמ דוע</textarea>
              </span>
              <span className="warning">םודאב הדשה תחת עיפוי היצדילו טסקט</span>
            </label>
          </div>

          <div className="form-agree">
            <label className="check-field">
              <Input
                type="checkbox"
                onChange={() => {
                  return
                }}
              />
              <span className="icon-check"></span>
              <span className="text">רתאל המשרהו תופרטצה יאנת רושיא</span>
            </label>
          </div>

          <div className="submit-btn">
            <Button
              type="button"
              className="main-btn"
              children={'ספוט חלש'}
              onClick={() => {
                return
              }}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Signup
