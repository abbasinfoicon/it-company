import mongoose from "mongoose";

// SCHMA
const stuSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    roll: { type: String, },
    blood: { type: String, required: true },
    religion: { type: String, required: true },
    email: { type: String, required: true },
    clas: { type: String, required: true },
    section: { type: String, required: true },
    admission: { type: String, },
    phone: { type: String, required: true },
    father: { type: String, },
    mother: { type: String, },
    img: { type: String, },
    bio: { type: String, },
    address: { type: String, }
},
    {
        timestamps: true,
    }
);

// MODEL
const stuModel = mongoose.models.student || mongoose.model("student", stuSchema);
export default stuModel;