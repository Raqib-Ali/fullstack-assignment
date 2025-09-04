import express from "express";
import { getConfiguration, updateRemark } from "../controllers/configuration.controller.js"

const router = express.Router();


router.get("/:id", getConfiguration);
router.put("/:id", updateRemark);

export default router;
