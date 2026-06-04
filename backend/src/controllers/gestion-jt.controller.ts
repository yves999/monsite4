
import { Request, Response } from "express";
import { pool } from "../database/db";


// GET ALL

export const getGestionJt = async (req: Request, res: Response) => {

    const result = await pool.query(
        "SELECT * FROM JT ORDER BY nom"
    );

    res.json(result.rows);
};


// GET BY ID

export const getGestionJtById = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
        // "SELECT prenom, nom FROM JT WHERE id = $1",
        // [identifiantCible]
        "SELECT * FROM JT WHERE id = $1",
        [identifiantCible]
    );

    res.json(result.rows);
};


// CREATE

export const createGestionJt = async (req: Request, res: Response) => {

    const { nom, prenom, mel, rog, wim, uso } = req.body;

      // Compter les joueurs ayant le même nom et prénom
    const compteur = await pool.query(
        `SELECT COUNT(*) AS nb
         FROM JT
         WHERE nom = $1
         AND prenom = $2`,
        [nom, prenom]
    );

    const nb = Number(compteur.rows[0].nb);

    console.log("Nombre de joueurs trouvés :", nb);

    if (nb >= 1) {

        console.log("Ce joueur existe déjà :", nom, prenom);

        return res.status(409).json({
            message: "Ce joueur existe déjà."
        });
    }


    const result = await pool.query(
        "INSERT INTO JT (nom,prenom,mel,rog,wim,uso) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
        [nom, prenom, mel, rog, wim, uso]
    );

     console.log ("result_CREATE: ", result);


    res.json(result.rows[0]);

  



};


// UPDATE

export const updateGestionJt = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const { nom, prenom, mel, rog, wim, uso } = req.body;

    // Vérification doublon
    const compteur = await pool.query(
        `SELECT COUNT(*) AS nb
         FROM JT
         WHERE nom = $1
         AND prenom = $2
         AND id <> $3`,
        [nom, prenom, identifiantCible]
    );

    const nb = Number(compteur.rows[0].nb);

    if (nb >= 1) {

        console.log(
            "MODIFICATION REFUSEE : doublon détecté pour",
            nom,
            prenom
        );

        return res.status(409).json({
            message: "Un autre joueur possède déjà ce nom et ce prénom."
        });
    }

    const result = await pool.query(
        `UPDATE JT
         SET nom = $1,
             prenom = $2,
             mel = $3,
             rog = $4,
             wim = $5,
             uso = $6
         WHERE id = $7
         RETURNING *`,
        [nom, prenom, mel, rog, wim, uso, identifiantCible]
    );

    console.log("result_UPDATE :", result);

    res.json(result.rows[0]);
};

// export const updateGestionJt = async (req: Request, res: Response) => {

//     const identifiantCible = req.params.identifiantCible;

//     const { nom, prenom, mel, rog, wim, uso } = req.body;

//     const result = await pool.query(
//         "UPDATE JT SET nom = $1, prenom = $2, mel = $3, rog = $4, wim = $5, uso = $6 WHERE id = $7 RETURNING *",
//         [nom, prenom, mel,rog, wim, uso, identifiantCible]
//     );

//     const result2 = await pool.query(
//         `UPDATE JT SET
//             nom = $1,
//             prenom = $2,
//             mel = $3, 
//             rog = $4,
//             wim = $5,
//             uso = $6 WHERE id = $7 RETURNING *`,
//             [nom, prenom, mel,rog, wim, uso, identifiantCible]
//     );


//       console.log ("result_UPDATE: ", result);

//     res.json(result.rows[0]);
// };


// DELETE

export const deleteGestionJt = async (req: Request, res: Response) => {

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
        "DELETE FROM JT WHERE id = $1 RETURNING *",
        [identifiantCible]
    );

    console.log ("result_DELETE: ", result);

    res.json(result.rows[0]);
};



