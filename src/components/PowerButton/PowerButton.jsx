import React from 'react'
import { NavLink } from 'react-router-dom'
import { Power } from './PowerButton.style'
import { PowerBtn } from '../icons/Icons'

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  )
}

export default PowerButton
