import React from 'react'

import { Faq as FaqContent } from '@root/constants'
import { AccordionItem } from '@components/index'

const Faq: React.FC = () => {
  return (
    <div className="faq-box">
      <div className="box-title">
        <h3>תוצופנ תולאש</h3>
      </div>
      <ul>
        {FaqContent.map((faq, index) => (
          <AccordionItem faq={faq} index={index} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default Faq
