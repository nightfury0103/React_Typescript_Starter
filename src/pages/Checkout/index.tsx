import React from 'react'

import { AppLayout, Breadcrumbs } from '@components/index'
import Products from './components/Products'
import Summary from './components/Summary'

const Checkout: React.FC = () => {
  return (
    <AppLayout>
      <div className="checkout-content">
        <Breadcrumbs text="גחל תונתמל הרזח" link="#" />
        <div className="content-title">
          <h1>הנמזה םוכיס</h1>
          <p>
            .הנמזהה תא םילשהלו םיטרפה לע רובעל תנמזומ ,הטמ עיפומ תעציבש הנמזהה
            םוכיס (: רופחל אל תוחיטבמ .םולשתה יאנתו םיטרפה תריגסל ינופלט רשק
            רוצינ ונא
          </p>
        </div>
        <Products />
        <Summary />
      </div>
    </AppLayout>
  )
}

export default Checkout
