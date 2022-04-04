import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

// import useAuth from './UseAuth'

const AuthRoute: React.FC = () => {
  // const auth = useAuth()
  const location = useLocation()

  // if (!auth.user) {
  //   return <Navigate to="/sign-in" state={{ from: location }} replace />
  // }

  if (!localStorage.getItem('isAuthentication')) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default AuthRoute
