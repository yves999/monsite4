import express from "express";
import cors from "cors";

import jtRoutes from "./routes/jt.routes";
import affichageRoutes from "./routes/affichage.routes";
import affichageJtRoutes from "./routes/affichage-jt.routes";
import affichageJt2Routes from "./routes/affichage-jt2.routes";
import gestionJtRoutes from "./routes/gestion-jt.routes";
import { pool } from "./database/db";

const app = express();

app.use(cors());
app.use(express.json());




// TEST

app.get("/", (req, res) => {
    res.send("Backend OK");
});


// ROUTES

app.use("/jt/affichage", affichageRoutes);

app.use("/jt/affichage-jt", affichageJtRoutes);

app.use("/jt/affichage-jt2", affichageJt2Routes);

app.use("/jt/gestion-jt", gestionJtRoutes);

app.use("/jt", jtRoutes);


// START SERVER

// app.listen(3000, () => {
//     console.log("Backend lancé sur http://localhost:3000");
// });

app.get("/init-db2", async (req, res) => {
    try {

        await pool.query(`
            DELETE FROM jt
            WHERE id = 102
        `);

        res.json({ message: "OK suppression2" });

    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur");
    }
});





// app.get("/init-db", async (req, res) => {
//     try {

//         await pool.query(`
//             DELETE FROM jt
//             WHERE id IN (102,103,104)
//         `);

//         res.json({ message: "OK suppression" });

//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Erreur");
//     }
// });



// app.get("/init-db", async (req, res) => {
// try {
//         await pool.query(`
//             CREATE TABLE jt (
//                 id SERIAL PRIMARY KEY,
//                 nom VARCHAR(100),
//                 prenom VARCHAR(100),
//                 mel VARCHAR(100),
//                 rog VARCHAR(100),
//                 wim VARCHAR(100),
//                 uso VARCHAR(100)
//             );
//         `);

//         await pool.query(`
//             INSERT INTO jt (id, nom, prenom, mel, rog, wim, uso)
//             VALUES
//             (3, 'Djokovic', 'Novak', '10', '3', '7', '4'),
//             (1, 'Federer', 'Roger', '6', '1', '8', '5'),
//             (2, 'Nadal', 'Rafael', '2', '14', '2', '4'),
//             (97, 'Agassi', 'André', '4', '1', '1', '2'),
//             (98, 'Sampras', 'Pete', '2', '0', '7', '5'),
//             (99, 'Connors', 'Jimmy', '1', '0', '2', '5'),
//             (100, 'Mac Enroe', 'John', 'demi-finaliste', 'finaliste', '3', '4'),
//             (101, 'Borg', 'Björn', '0', '6', '5', 'finaliste')  
//         `);

//         res.send("Base initialisée");

// } 

// catch (err) {
// console.error(err);
// res.status(500).send("Erreur");
// }
// });



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend lancé sur le port ${PORT}`);
});