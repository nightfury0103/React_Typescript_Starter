import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { IUser } from '@root/types'
import useAuth from '@components/Auth/UseAuth'

interface Props {
  user?: IUser
  className?: string
}

const UserNav: React.FC<Props> = ({ user, className }) => {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div className={classNames('links-box user-avatar', className)}>
      <a href="#">
        <b>
          <u>
            {Boolean(localStorage.getItem('isAuthentication')) ? (
              <div
                onClick={() => {
                  auth.signout(() => navigate('/'))
                }}
              >
                Sign out
              </div>
            ) : (
              <div onClick={() => navigate('/sign-in')}>Sign in</div>
            )}
          </u>
        </b>
        <span
          className={
            Boolean(localStorage.getItem('isAuthentication'))
              ? 'user-icon'
              : 'login-icon'
          }
        ></span>
      </a>
    </div>
  )
}

export default UserNav
