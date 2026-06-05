import express from "express";

import {
    getAffichage
  
} from "../controllers/affichage.controller";

const router = express.Router();

router.get("/", getAffichage);


export default router;
