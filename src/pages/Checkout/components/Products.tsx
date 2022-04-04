import React from 'react'

import { Products as Items } from '@root/constants'
import Product from './Product'

const Products: React.FC = () => {
  return (
    <div className="checkout-product">
      {Items.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  )
}

export default Products
