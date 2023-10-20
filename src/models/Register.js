import mongoose from "mongoose";

// SCHMA
const regSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    image: { type: String },
},
    {
        timestamps: true,
    }
);

// MODEL
const regModel = mongoose.models.register || mongoose.model("register", regSchema);
export default regModel;