import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BackgroundImage from '@assets/images/login-bg.svg'

import { AppLayout } from '@components/index'
import { Button, Input } from '@components/Form'
import useAuth from '@components/Auth/UseAuth'

import './style.css'

const Login: React.FC = () => {
  const [isValid, setIsValid] = useState(false)
  const [message, setMessage] = useState('')
  const [emailData, setEmailData] = useState('')
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const navigate = useNavigate()
  const auth = useAuth()

  const from = '/'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    setEmailData(email)

    auth.signin(email, () => {
      navigate(from, { replace: true })
    })
  }

  useEffect(() => {
    let _isValid = true
    let _message = ''
    if (emailData === undefined) {
      return
    } else {
      if (!emailRegex.test(emailData)) {
        _isValid = false
        _message = 'Invalid email'
      }
    }

    setIsValid(_isValid)
    setMessage(_message)
  }, [emailData])

  return (
    <AppLayout
      className="login-box"
      headerStatus="header-status"
      footerStatus="footer-status"
    >
      <div className="container">
        <div className="box-content">
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <div className="content-title">
                <h1>
                  <b>Hey there!</b> <span>🥂</span>
                  <br />
                  <i>welcome to kookoo</i>
                </h1>
              </div>
              <div className="content-text">
                <div className="extra-btn">
                  <a href="#" className="main-btn outline">
                    <b>Become kookoo’s friend</b>
                  </a>
                </div>
                <div className="form-section">
                  <h3>
                    <span>
                      <i>Already a member?</i>
                    </span>
                  </h3>
                </div>
                <div className="form-fields">
                  <label className="full-size">
                    <span className="field">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={() => {
                          return
                        }}
                      />
                      <div
                        className={`message ${isValid ? 'success' : 'error'}`}
                      >
                        {message}
                      </div>
                    </span>
                    <span className="warning">
                      םודאב הדשה תחת עיפוי היצדילו טסקט
                    </span>
                  </label>
                  <label className="full-size">
                    <span className="field">
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={() => {
                          return
                        }}
                      />
                    </span>
                    <span className="warning">
                      םודאב הדשה תחת עיפוי היצדילו טסקט
                    </span>
                  </label>
                </div>
                <div className="forgot-btn">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="submit-btn">
                  <Button
                    type="submit"
                    className="main-btn pink"
                    children="Sign in"
                    onClick={() => {
                      return
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-box">
            <span>
              <img src={BackgroundImage} alt="" />
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Login
