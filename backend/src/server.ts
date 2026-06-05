import express from "express";
import cors from "cors";

import jtRoutes from "./routes/jt.routes";
import affichageRoutes from "./routes/affichage.routes ";
import affichageJtRoutes from "./routes/affichage-jt.routes";
import affichageJt2Routes from "./routes/affichage-jt2.routes";
import gestionJtRoutes from "./routes/gestion-jt.routes";

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend lancé sur le port ${PORT}`);
});