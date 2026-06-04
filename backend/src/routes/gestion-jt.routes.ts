import express from "express";

import {
    getGestionJt,
    getGestionJtById,
    createGestionJt,
    updateGestionJt,
    deleteGestionJt
} from "../controllers/gestion-jt.controller";

const router = express.Router();

router.get("/", getGestionJt);

router.get("/:identifiantCible", getGestionJtById);

router.post("/", createGestionJt);

router.put("/:identifiantCible", updateGestionJt);

router.delete("/:identifiantCible", deleteGestionJt);

export default router;