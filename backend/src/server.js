import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import configRoutes from "./routes/configuration.routes.js"
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/configurations", configRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error(err));
