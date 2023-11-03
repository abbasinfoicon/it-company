
'use server';
import React from 'react'
import ConnectDB from '@/config/db';
import stuModel from '@/models/StuModel';
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server';

const studentAction = async (e) => {
    const fname = e.get("fname");
    const lname = e.get("lname");
    const gender = e.get("gender");
    const dob = e.get("dob");
    const roll = e.get("roll");
    const blood = e.get("blood");
    const religion = e.get("religion");
    const email = e.get("email");
    const clas = e.get("clas");
    const section = e.get("section");
    const admission = e.get("admission");
    const phone = e.get("phone");
    const father = e.get("father");
    const mother = e.get("mother");
    const img = e.get("img");
    const bio = e.get("bio");
    const address = e.get("address");

    try {
        ConnectDB();
        if (fname && lname && gender && dob && blood && religion && email && clas && section && phone) {

            const byteData = await img.arrayBuffer();
            const buffer = Buffer.from(byteData);
            const path = `./public/assets/img/uploads/student/${img.name}`;
            await writeFile(path, buffer);
            const imgName = `/assets/img/uploads/student/${img.name}`;

            const newStudent = new stuModel({ fname, lname, gender, dob, roll, blood, religion, email, clas, section, admission, phone, father, mother, img: imgName, bio, address });

            await newStudent.save();
            return { status: 200, message: 'User is Registered!!' }
        } else {
            console.error("All * fields Required..!!!")
            return { status: 204, message: 'All * fields Required..!!!' }
        }

    } catch (error) {
        console.error("Student Error:", error)
    }
}

export default studentAction