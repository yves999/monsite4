import { Request, Response } from "express";
import { pool } from "../database/db";

// export const getAffichageJt = async (req: Request, res: Response) => {

//     const result = await pool.query(
//         "SELECT * FROM JT ORDER BY nom"
//     );

//     res.json(result.rows);
// };


export const getAffichageJt2 = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
        "SELECT * FROM JT WHERE id = $1",
        [identifiantCible]
    );

    res.json(result.rows);
};
