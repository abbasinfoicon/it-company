"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const session = useSession();
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    }

    useEffect(() => {
        const getCookie = (cname) => {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };

        const emailCookie = getCookie("email") || "";
        const passwordCookie = getCookie("password") || "";

        setData({
            email: emailCookie,
            password: passwordCookie
        });
    }, []);

    useEffect(() => {
        // Use the useEffect hook to conditionally redirect
        if (session.status === "authenticated") {
            router.push("/dashboard");
        }

    }, [session.status, router]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        if (rememberMe) {
            document.cookie = `email=${data.email};path=/;expires=${new Date(2024, 0, 1).toUTCString()}`;
            document.cookie = `password=${data.password};path=/;expires=${new Date(2024, 0, 1).toUTCString()}`;
        } else {
            document.cookie = "email=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            document.cookie = "password=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }

        const { email, password } = data;
        if (!email || !password) {
            toast.error("All fields Required!!!");
        } else {
            try {
                const res = await signIn("credentials", { email, password, redirect: false });

                if (res && res.error) {
                    toast.error("Invalid wrong information!!!");
                    return;
                } else {
                    router.replace("/dashboard");
                }

            } catch (error) {
                console.error("error", error);
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
                            <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter password" className="form-control" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember-me" checked={rememberMe} onChange={handleRememberMeChange} />
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
                            <li><button onClick={() => signIn("facebook")} className="bg-fb"><i className="fab fa-facebook-f"></i></button></li>
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