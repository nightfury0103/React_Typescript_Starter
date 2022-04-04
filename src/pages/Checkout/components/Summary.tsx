import React, { useMemo } from 'react'

import { Price } from '@root/constants'
import { Input } from '@components/Form'

const Summary: React.FC = () => {
  const sum = useMemo(() => {
    return Price.reduce((prev, current) => {
      return prev + current.price
    }, 0)
  }, [])

  return (
    <div className="summary-box">
      <div className="total-info">
        <ul>
          {Price.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.price} ח"ש</span>
            </li>
          ))}
          <li className="result">
            <span>םולשתל</span>
            <span>{sum} ח"ש</span>
          </li>
        </ul>
      </div>
      <div className="agree-box">
        <label className="check-field">
          <Input
            type="checkbox"
            onChange={() => {
              return
            }}
          />
          <span className="icon-check"></span>
          <span className="text">םולשתהו הנמזהה יאנתו רתאה ןונקת רושיא</span>
        </label>
      </div>
      <div className="btn-wrap">
        <button type="button" className="main-btn">
          הנמזה עוציב
        </button>
      </div>
      <div className="text-box">
        <p>
          .הנמזה רושיא הווהמ הניא הנמזה עוציב לע הציחל ,בל ימיש יטרפ תריגסל
          ינופלט רשק רוצינ ונא הנמזהה םוכיס תחילש רחאל
          <br />
          .הנמזהה רושיאו םולשתה
        </p>
      </div>
    </div>
  )
}

export default Summary
