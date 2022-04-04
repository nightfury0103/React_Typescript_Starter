import React from 'react'

import { IProduct } from '@root/types'

interface Props {
  item: IProduct
}

const Product: React.FC<Props> = ({ item }) => {
  return (
    <div className="item-box">
      <div className="img">
        <span>
          <img src={item.image} alt="" />
        </span>
      </div>
      <div className="data">
        <div className="info-wrap">
          <div className="name">
            <h3>
              <i>{item.name}</i>
            </h3>
          </div>
          <div className="extra">
            <p>
              <span>
                {item.extra?.firstLabel}
                <b>{item.extra?.firstValue}</b>
              </span>
            </p>
            <p>{item.extra?.secondLabel}</p>
          </div>
          <div className="text">
            <h5>{item.description} </h5>
            <p>
              {item.category}
              <br />
              (4) ינועבט | (5) ןטולגל תושיגר | תורשכ
            </p>
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button" className="main-btn outline">
            ןאכ ףיסוהל שי תופסונ תורעה
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
