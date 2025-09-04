import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
    configId: { type: String, required: true, unique: true },
    matrix: [[String]],
    remark: { type: String }
});

const Configuration = mongoose.model("Configuration", configurationSchema);

export default Configuration;
