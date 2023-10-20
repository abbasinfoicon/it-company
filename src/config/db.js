import mongoose from "mongoose";

const ConnectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        const DB_OPTIONS = {
            dbName: "it-company",
        };
        await mongoose.connect(process.env.MONGO_URL, DB_OPTIONS);
        console.log(`Connection Successful on ${process.env.MONGO_URL}`);
    } catch (error) {
        console.log("Database Connection Failed...!!!", error);
    }
};

export default ConnectDB;