import React, { useCallback, useState } from 'react'

import AuthContext from './Context'

interface Props {
  children: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(null)

  const signin = useCallback((newUser: string, callback: VoidFunction) => {
    setUser(newUser)
    localStorage.setItem('isAuthentication', 'true')
    localStorage.setItem('user', newUser)
    callback()
  }, [])

  const signout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('isAuthentication')
    localStorage.removeItem('user')
  }, [])

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
