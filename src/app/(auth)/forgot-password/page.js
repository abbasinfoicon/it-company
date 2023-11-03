"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),

      });
      const result = await res.json();

      if (result.status === 409 || result.status === 500 || result.status === 400) {
        toast.error(result.message);
      }
      if (result.status === 200) {
        toast.success(result.message);
        setEmail('');
        router.push("/reset-password");
      }
    } catch (error) {
      console.error('Password reset request failed.', error);
    }
  };

  return (
    <div className="login-page-wrap">
      <div className="login-page-content">
        <div className="login-box">
          <div className="item-logo">
            <img src="assets/img/logo2.png" alt="logo" />
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
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