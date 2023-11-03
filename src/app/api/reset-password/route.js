import ConnectDB from '@/config/db'
import otpModel from '@/models/Otp';
import regModel from '@/models/Register';
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

ConnectDB();

export const POST = async (req) => {
    try {
        const data = await req.json();

        if (data) {
            const checkOtp = await otpModel.findOne({ otp: data.otp });
            if (checkOtp) {
                const currentTime = new Date().getTime();
                const diff = checkOtp.expireIn - currentTime;

                if (diff < 0) {
                    return NextResponse.json({ status: 409, message: 'Token Expire...!!!' });
                } else {
                    const emailData = await regModel.findOne({ email: checkOtp.email }).catch(error => {
                        console.error("Database error:", error);
                        return NextResponse.json({ status: 500, message: 'Database error' });
                    });

                    const { password, cpassword, otp } = data;
                    if (password == cpassword) {
                        const hashPassword = await bcrypt.hash(password, 5);
                        await regModel.findByIdAndUpdate(emailData._id, { password: hashPassword });
                    } else {
                        return NextResponse.json({ status: 409, message: 'Password not match..!!!' });
                    }
                }
            } else {
                return NextResponse.json({ status: 409, message: 'OTP not match..!!!' });
            }
        } else {
            return NextResponse.json({ status: 400, message: 'Invalid request body...' });
        }

        return NextResponse.json({ status: 200, message: 'New password Create..!!' });
    } catch (error) {
        console.error("new password error....!!!", error);
        return NextResponse.json({ status: 500, message: 'new password error....!!!' });
    }
};

