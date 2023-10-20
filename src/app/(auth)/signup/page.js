"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Signup = () => {
    const router = useRouter();
    const [data, setData] = useState({ name: "", email: "", phone: "", password: "", gender: "", dob: "", image: "", });

    const handleChange = (e) => {
        if (e.target.id === 'image') {
            setData({ ...data, [e.target.name]: e.target.files?.[0] });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = new FormData();
        newData.set('name', data.name);
        newData.set('email', data.email);
        newData.set('phone', data.phone);
        newData.set('password', data.password);
        newData.set('gender', data.gender);
        newData.set('dob', data.dob);
        newData.set('image', data.image);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: newData
                // body: JSON.stringify({ ...data, img: data.img.name })
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
            console.log("Register not added !!!", error)
        }

        setData({ name: "", email: "", phone: "", password: "", dob: "", gender: "", image: e.target.reset(), });
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
                            <label>Username</label>
                            <input type="text" placeholder="Enter usrename" name="name" value={data.name} onChange={handleChange} className="form-control" />
                            <i className="far fa-user"></i>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Email" name="email" value={data.email} onChange={handleChange} className="form-control" />
                            <i className="far fa-envelope"></i>
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" placeholder="Enter Phone" name="phone" value={data.phone} onChange={handleChange} className="form-control" />
                            <i className="fas fa-phone"></i>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" name="password" value={data.password} onChange={handleChange} className="form-control" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" value={data.gender} onChange={handleChange} className='form-control'>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Upload Photo</label>
                            <input type="file" name="image" id="image" onChange={handleChange} className="form-control" accept="image/gif, image/jpeg, image/png" />
                            <i className="fas fa-media"></i>
                        </div>

                        <div className="form-group">
                            <label>Date Of Birth</label>
                            <input type="date" name="dob" id="dob" value={data.dob} onChange={handleChange} className="form-control" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="login-btn">Signup</button>
                        </div>
                    </form>

                </div>
                <div className="sign-up">Already have an account ? <Link href="/login">Login</Link></div>
            </div>
        </div>
    )
}

export default Signup