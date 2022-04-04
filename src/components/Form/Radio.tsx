import React from 'react'

interface Props {
  checked?: boolean
  label?: string
  // onChange: (v: boolean) => void
}

const Radio: React.FC<Props> = ({ checked, label }) => {
  return (
    <p>
      {/* <label className="check-field" onChange={() => onChange(!checked)}> */}
      <label className="check-field">
        <input type="radio" checked={checked} name="field" />
        <span className="icon-check"></span>
        {!!label && <span className="text">{label}</span>}
      </label>
    </p>
  )
}

export default Radio
