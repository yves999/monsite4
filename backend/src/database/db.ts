

// <!-- Connexion PostgreSQL centralisée. -->

// ```ts id="4xjqx7"


import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Palmares_JT",
  password: "1234",
  port: 5432,
});
// ```
