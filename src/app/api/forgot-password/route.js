import ConnectDB from '@/config/db';
import otpModel from '@/models/Otp';
import regModel from '@/models/Register';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

ConnectDB();

// Move the mailer function declaration to the top of the POST handler
const mailer = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    });

    var mailOptions = {
        from: process.env.USER,
        to: email, // Use the passed email parameter here
        subject: 'Reset Password',
        text: 'Thank you sir !',
        html: `<p>HTML version of the message ${otp}</p>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Mail send: ', info.response);
    } catch (error) {
        console.error('Mail Error: ', error);
        throw error; // Rethrow the error to be caught in the catch block outside the mailer function
    }
};

export const POST = async (req) => {
    try {
        const data = await req.json();

        if (!data) {
            return NextResponse.json({ status: 400, message: 'Invalid request body...' });
        }

        const exEmail = await regModel.findOne({ email: data.email });
        if (exEmail) {
            const otpCode = Math.floor(Math.random() * 10000) + 1;
            const expire = new Date().getTime() + 300 * 1000;

            const fgp = new otpModel({ email: exEmail.email, otp: otpCode, expireIn: expire });
            await fgp.save();
            await mailer(exEmail.email, otpCode); // Await the mailer function here            
        } else {
            return NextResponse.json({ status: 409, message: 'Email is not existing...!!' });
        }

        return NextResponse.json({ status: 200, message: 'Send Mail to your E-Mail!!' });
    } catch (error) {
        console.error('Password reset request failed.', error);
        return NextResponse.json({ status: 500, message: 'Mail not sent....!!!' });
    }
};
