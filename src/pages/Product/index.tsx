import React from 'react'

import { AppLayout, Breadcrumbs } from '@components/index'
import Detail from './components/Detail'
import Faq from './components/Faq'

import './style.css'

const Product: React.FC = () => {
  return (
    <AppLayout headerLogoStatus={true}>
      <div className="single-product">
        <Breadcrumbs text="גחל תונתמל הרזח" link="#" />
        <Detail />
        <Faq />
      </div>
    </AppLayout>
  )
}

export default Product
