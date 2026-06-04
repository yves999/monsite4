import express from "express";

import {
    // getAffichageJt,
    getAffichageJt2
} from "../controllers/affichage-jt2.controller";

const router = express.Router();

// router.get("/", getAffichageJt);

router.get("/:identifiantCible", getAffichageJt2);

export default router;
