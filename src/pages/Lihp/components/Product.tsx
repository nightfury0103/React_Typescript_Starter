import React from 'react'

import { IProduct } from '@root/types'

interface Props {
  item: IProduct
}

const Product: React.FC<Props> = ({ item }) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <a href="#" className="card-link"></a>
        <span className="img">
          <img src={item.image} alt="" />
        </span>
        <div className="status">
          {item.tab?.soldOut && (
            <span className="soldOut">{item.tab?.soldOut}</span>
          )}
          {item.tab?.specialOffer && (
            <span className="specialOffer">{item.tab?.specialOffer}</span>
          )}
          {item.tab?.customMade && (
            <span className="customMade">{item.tab?.customMade}</span>
          )}
          {item.tab?.lastCall && (
            <span className="lastCall">{item.tab?.lastCall}</span>
          )}
        </div>
      </div>
      <div className="info-box">
        <div className="item-wrap">
          <h3>
            <a href="#">
              <i>{item.name}</i>
            </a>
          </h3>
          <p>{item.description}</p>
        </div>
        <div className="item-wrap">
          <h3>
            <i>{item.price}</i>
          </h3>
          <p>{item.symbol}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
