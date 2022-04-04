/* eslint-disable no-unused-vars */
import React from 'react'

interface Props {
  opened?: boolean
  onToggle: (v: boolean) => void
}

const MenuToggleButton: React.FC<Props> = ({ opened, onToggle }) => (
  <div className="open-menu">
    <button
      type="button"
      className={opened ? 'active' : ''}
      onClick={() => onToggle(!opened)}
    >
      <span className="icon-menu"></span>
    </button>
  </div>
)

export default MenuToggleButton
