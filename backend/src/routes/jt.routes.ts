import express from "express";

import { getJt } from "../controllers/jt.controller";

const router = express.Router();

router.get("/", getJt);

export default router;