import express, { Request, Response } from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());

// CONNEXION POSTGRESQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Palmares_JT",
  password: "1234",
  port: 5432,
});

// TEST
app.get("/", (req: Request, res: Response) => {
  res.send("Backend OK");
});


// MODIFIER /jt/gestion-jt/:identifiantCible  [put]

app.put("/jt/gestion-jt/:identifiantCible", async (req: Request, res: Response) => {

  const identifiantCible = req.params.identifiantCible;

  const { nom, prenom } = req.body;

  const result = await pool.query(
    "UPDATE JT SET nom = $1, prenom = $2 WHERE id = $3 RETURNING *",
    [nom, prenom, identifiantCible]
  );

  res.json(result.rows[0]);

});


app.delete("/jt/gestion-jt/:identifiantCible", async (req: Request, res: Response) => {

  const identifiantCible = req.params.identifiantCible;

  const result = await pool.query(
    "DELETE FROM JT WHERE id = $1 RETURNING *",
    [identifiantCible]
  );

  res.json(result.rows[0]);

});


// AJOUTER /jt/gestion-jt  [post]: prenom,nom

app.post("/jt/gestion-jt", async (req: Request, res: Response) => {
  const { nom, prenom } = req.body;

  const result = await pool.query(
    "INSERT INTO JT (Nom, Prenom) VALUES ($1, $2) RETURNING *",
    [nom, prenom]
  );
  res.json(result.rows[0]);
});


// LIRE /jt/gestion-jt [get]: prenom,nom

app.get("/jt/gestion-jt/:identifiantCible", async (req: Request, res: Response) => {

    console.info(`[get]: prenom,nom`);

    const identifiantCible = req.params.identifiantCible;

    const result = await pool.query(
      "SELECT prenom, nom FROM JT WHERE id = $1",
      [identifiantCible]
    );

    res.json(result.rows);

});


// LIRE /jt/gestion-jt

app.get("/jt/gestion-jt", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM JT ORDER BY nom");
  res.json(result.rows);
});

// LIRE /jt/affichage-jt2 [get]: prenom,nom

app.get("/jt/affichage-jt2/:identifiantCible", async (req: Request, res: Response) => {

  console.info(`[get]: prenom,nom`);

  const identifiantCible = req.params.identifiantCible;

  const result = await pool.query(
    "SELECT prenom, nom FROM JT WHERE id = $1",
    [identifiantCible]
  );

  // const result = await pool.query(
  //   "SELECT prenom, nom FROM JT WHERE id = '${identifiantCible}'"
  // );

  res.json(result.rows);
});

// app.get("/jt/affichage-jt2/:identifiantCible", async (req: Request, res: Response) => {

//    console.info(`[get]: prenom,nom `);

//   const result = await pool.query("SELECT prenom,nom FROM JT WHERE id = '${identifiantCible}'");
//   res.json(result.rows);
// });


// LIRE /jt/affichage-jt

app.get("/jt/affichage-jt", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM JT ORDER BY nom");
  res.json(result.rows);
});

// LIRE /jt/affichage

app.get("/jt/affichage", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM JT ORDER BY nom");
  res.json(result.rows);
});

// LIRE /jt

app.get("/jt", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM JT ORDER BY Id");
  res.json(result.rows);
});

// AJOUTER /jt

app.post("/jt", async (req: Request, res: Response) => {
  const { nom, prenom } = req.body;

  const result = await pool.query(
    "INSERT INTO JT (Nom, Prenom) VALUES ($1, $2) RETURNING *",
    [nom, prenom]
  );
  res.json(result.rows[0]);
});

app.listen(3000, () => {
  console.log("Backend lancé sur http://localhost:3000");
});