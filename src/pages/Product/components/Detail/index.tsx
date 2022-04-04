import React from 'react'

import { Images } from '@root/constants'

import { Slider } from '@components/index'
import Description from './Description'
import MoreImages from './MoreImages'

const Detail: React.FC = () => {
  return (
    <div className="product-box">
      <div className="img-box">
        <Slider imgItems={Images} />
        <MoreImages />
      </div>
      <Description />
    </div>
  )
}

export default Detail
