import { Request, Response } from "express";
import { pool } from "../database/db";

export const getJt = async (req: Request, res: Response) => {

    const result = await pool.query(
        "SELECT * FROM JT ORDER BY id"
    );

    res.json(result.rows);
};
