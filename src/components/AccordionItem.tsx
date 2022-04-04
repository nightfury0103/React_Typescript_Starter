import React, { useState } from 'react'

import { IFaq } from '@root/types'

const AccordionItem: React.FC<IFaq> = ({ faq, index }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <li
      key={index}
      className={open ? 'open' : ''}
      onClick={() => setOpen(!open)}
    >
      <div className="question">
        <h4>{faq.question}</h4>
      </div>
      <div className="answer">
        <p>{faq.answer}</p>
      </div>
    </li>
  )
}

export default AccordionItem
