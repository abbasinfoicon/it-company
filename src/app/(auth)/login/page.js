"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const session = useSession();
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    if (session.status === "authenticated") {
        router.push("/");
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(data)

        const { email, password } = data;
        if (!email || !password) {
            toast.error("All fields Required!!!");
        } else {
            try {
                const res = await signIn("credentials", { email, password, redirect: false });
                console.log("res", res);

                if (res && res.error) {
                    toast.error("Invalid wrong information!!!");
                    return;
                } else {
                    router.replace("/")
                }

            } catch (error) {
                console.log("error", error);
            }
        }
    }

    return (
        <div className="login-page-wrap">
            <div className="login-page-content">
                <div className="login-box">
                    <div className="item-logo">
                        <img src="assets/img/logo2.png" alt="logo" />
                    </div>

                    <form className="login-form" onSubmit={formSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />
                            <i className="far fa-envelope"></i>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="password" value={data.password} onChange={handleChange} placeholder="Enter password" className="form-control" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember-me" />
                                <label htmlFor="remember-me" className="form-check-label">Remember Me</label>
                            </div>
                            <Link href="/forgot-password" className="forgot-btn">Forgot Password?</Link>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="login-btn">Login</button>
                        </div>
                    </form>

                    <div className="login-social">
                        <p>or sign in with</p>
                        <ul>
                            <li><button className="bg-fb"><i className="fab fa-facebook-f"></i></button></li>
                            <li><button onClick={() => signIn("google")} className="bg-gplus"><i className="fab fa-google"></i></button></li>
                            <li><button onClick={() => signIn("github")} className="bg-git"><i className="fab fa-github"></i></button></li>
                            <li><button className="bg-twitter"><i className="fab fa-twitter"></i></button></li>
                        </ul>
                    </div>
                </div>
                <div className="sign-up">Don't have an account ? <Link href="/signup">Signup now!</Link></div>
            </div>
        </div >
    )
}

export default Login