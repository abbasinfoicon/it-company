"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const router = useRouter();
    const [data, setData] = useState({ password: "", cpassword: "", otp: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/reset-password", {
                method: "POST",
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (result.status === 400 || result.status === 409 || result.status === 500) {
                toast.error(result.message);
            }
            if (result.status === 200) {
                toast.success(result.message);

                router.push("/login");
            }

        } catch (error) {
            console.error("Password Not Created !!!", error)
        }

        setData({ password: "", cpassword: "", otp: "" });
    }

    return (
        <div className="login-page-wrap">
            <div className="login-page-content">
                <div className="login-box">
                    <div className="item-logo">
                        <img src="assets/img/logo2.png" alt="logo" />
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Enter OTP</label>
                            <input type="text" name="otp" value={data.otp} onChange={handleChange} placeholder="Enter OTP" className="form-control" />
                            <i className="fas fa-key"></i>
                        </div>

                        <div className="form-group">
                            <label>New Password</label>
                            <input type="text" name="password" value={data.password} onChange={handleChange} placeholder="Enter password" className="form-control" />
                            <i className="fas fa-unlock"></i>
                        </div>

                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="text" name="cpassword" value={data.cpassword} onChange={handleChange} placeholder="Enter Confirm password" className="form-control" />
                            <i className="fas fa-unlock"></i>
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