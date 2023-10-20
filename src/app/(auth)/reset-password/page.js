import Link from 'next/link'
import React from 'react'

const ResetPassword = () => {
    return (
        <div className="login-page-wrap">
            <div className="login-page-content">
                <div className="login-box">
                    <div className="item-logo">
                        <img src="assets/img/logo2.png" alt="logo" />
                    </div>
                    <form className="login-form">
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="text" placeholder="Enter password" className="form-control" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="text" placeholder="Enter Confirm password" className="form-control" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="login-btn">Reset Password</button>
                        </div>
                    </form>
                </div>
                <div className="sign-up">Already have an account ? <Link href="/login">Login</Link></div>
            </div>
        </div>
    )
}

export default ResetPassword