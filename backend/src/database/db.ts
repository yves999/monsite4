
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});



// import { Pool } from "pg";

// const isProduction = process.env.NODE_ENV === "production";

// export const pool = new Pool(
//   isProduction
//     ? {
//         connectionString: process.env.DATABASE_URL,
//         ssl: { rejectUnauthorized: false }
//       }
//     : {
//         user: "postgres",
//         host: "localhost",
//         database: "Palmares_JT",
//         password: "1234",
//         port: 5432
//       }
// );







// <!-- Connexion PostgreSQL centralisée. -->

// ```ts id="4xjqx7"


// import { Pool } from "pg";

// export const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "Palmares_JT",
//   password: "1234",
//   port: 5432,
// });
// // ```
