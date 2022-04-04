import React from 'react'
import AuthContext from './Context'

const useAuth = () => {
  return React.useContext(AuthContext)
}

export default useAuth
