import React from 'react'

import { LihpProducts, Features, Sorts } from '@root/constants'

import { AppLayout } from '@components/index'
import Product from './components/Product'

import './styles.css'

const Errors: React.FC = () => {
  return (
    <AppLayout headerLogoStatus={true}>
      <div className="catalog-content">
        <div className="content-title">
          <h1>
            2022 חספ <b>גחל תונתמ</b>
          </h1>
        </div>
        <div className="extra-info">
          <div className="see-more">
            <p>הנמזה תורדגה</p>
          </div>
          <div className="more-wrap">
            <div className="features-box">
              {Features.map((item, index) => (
                <div className="item-wrap" key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="sorting-box">
              <h3>:םיפסונ םישגד</h3>
              <ul>
                {Sorts.map((v, index) => (
                  <li key={index}>
                    <a href="#">
                      {v.value !== 0 && `(${v.value})`} {v.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="catalog-list">
          {LihpProducts.map((value, index) => (
            <Product item={value} key={index} />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default Errors
