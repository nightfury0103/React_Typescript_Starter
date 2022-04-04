import React from 'react'
import { Routes as GroupRoutes, Route } from 'react-router-dom'

import Provider from '@components/Auth/Provider'
import AuthRoute from '@components/Auth/AuthRoute'
import {
  About,
  Checkout,
  Errors,
  Lihp,
  Product,
  RTL,
  Signin,
  Signup,
  ThankyouV1,
  ThankyouV2,
  ThankyouV3,
} from '@pages/index'

const Routes: React.FC = () => {
  return (
    <Provider>
      <GroupRoutes>
        <Route path="*" element={<Errors />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />

        <Route element={<AuthRoute />}>
          <Route path="/" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/lihp" element={<Lihp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/rtl" element={<RTL />} />
          <Route path="/thankyou-v1" element={<ThankyouV1 />} />
          <Route path="/thankyou-v2" element={<ThankyouV2 />} />
          <Route path="/thankyou-v3" element={<ThankyouV3 />} />
        </Route>
      </GroupRoutes>
    </Provider>
  )
}

export default Routes
