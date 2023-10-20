import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="login-page-wrap">
      <div className="login-page-content">
        <div className="login-box">
          <div className="item-logo">
            <img src="assets/img/logo2.png" alt="logo" />
          </div>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" className="form-control" />
              <i className="far fa-envelope"></i>
            </div>

            <div className="form-group">
              <button type="submit" className="login-btn">Send Email</button>
            </div>
          </form>
        </div>
        <div className="sign-up">Don't have an account ? <Link href="/signup">Signup now!</Link></div>
      </div>
    </div>
  )
}

export default ForgotPassword