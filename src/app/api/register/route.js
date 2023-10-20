import ConnectDB from '@/config/db'
import regModel from '@/models/Register'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'

ConnectDB();

export const POST = async (req) => {
    try {
        const data = await req.formData();

        if (!data) {
            return NextResponse.json({ status: 400, message: 'Invalid request body...' });
        }

        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const password = data.get('password');
        const gender = data.get('gender');
        const dob = data.get('dob');
        const file = data.get('image');

        if (!name || !email || !phone || !password || !gender || !dob || !file) {
            return NextResponse.json({ status: 400, message: 'All fields Required!!!' });
        }

        const existEmail = await regModel.findOne({ email });
        if (existEmail) {
            return NextResponse.json({ status: 409, message: 'Email is already existing...!!' });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/assets/img/uploads/${file.name}`;
        await writeFile(path, buffer);
        const imgName = file.name;
        console.log("img-name:", imgName)

        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = new regModel({ name, email, phone, password: hashPassword, gender, dob, image: file.name });
        await newUser.save();

        return NextResponse.json({ status: 200, message: 'User is Registered!!' });
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Data not registered....!!!' });
    }
};
