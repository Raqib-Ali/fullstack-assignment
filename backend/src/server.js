import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ConfigRoutes from "./routes/configuration.routes";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/configurations', ConfigRoutes);

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
