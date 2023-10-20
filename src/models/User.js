import mongoose from "mongoose";

// SCHMA
const userSchema = new mongoose.Schema({
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
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;