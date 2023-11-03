import mongoose from "mongoose";

// SCHMA
const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String },
    expireIn: { type: Number }
},
    {
        timestamps: true,
    }
);

// MODEL
const otpModel = mongoose.models.otp || mongoose.model("otp", otpSchema);
export default otpModel;