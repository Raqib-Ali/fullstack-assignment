import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
    configId: { type: String, required: true, unique: true },
    data: [[String]],
    remark: { type: String }
}, { timestamps: true });

const Configuration = mongoose.model("Configuration", configurationSchema, "configurations");

export default Configuration;