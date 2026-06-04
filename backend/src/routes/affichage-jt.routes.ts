import express from "express";

import {
    getAffichageJt
   
} from "../controllers/affichage-jt.controller";

const router = express.Router();

router.get("/", getAffichageJt);

// router.get("/:identifiantCible", getAffichageJtById);

export default router;
