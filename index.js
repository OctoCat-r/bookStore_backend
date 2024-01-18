// const express = require("express");
// const app = express();
// const port = 4000;
// const pg = require("pg");
// const pool = require("./db");

// require("dotenv").config();

// // PostgreSQL connection pool
// // const pool = new pg.Pool({
// //   connectionString: process.env.DATABASE_URL,
// //   // connectionString: "postgres://postgres@localhost/bookstore"
// // });

// // const pool = new pg.Pool({
// //   user: "postgres",
// //   password: "Aman@123",
// //   host: "localhost",
// //   port: 5432,
// //   database: "bookstore",
// // });
// // app.post("/todos", async (req, res) => {
// //   try {
// //     const { description } = req.body;
// //     const newTodo = await pool.query(
// //       "INSERT INTO todo (description) VALUES($1) RETURNING *",
// //       [description]
// //     );

// //     res.json(newTodo.rows[0]);
// //   } catch (err) {
// //     console.error(err.message);
// //   }
// // });
// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// // Load routes
// // const usersRoutes = require('./routes/users');

// // Mount routes
// // app.use('/users', usersRoutes);

// // Start the server
// app.listen(port, async () => {
//   console.log(`Server listening on port ${port}`);

//   try {
//     const client = await pool.connect();

//     // Create the table if it doesn't exist
//     await client.query(
//       "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, email TEXT)"
//     );

//     // Insert a dummy entry
//     await client.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
//       "John Doe",
//       "johndoe@example.com",
//     ]);

//     client.release();
//     console.log(
//       "Users table created (if needed) and dummy user added successfully!"
//     );
//   } catch (error) {
//     console.error("Error creating users table or dummy user:", error);
//   }
// });

const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const bookRouter = require("./routes/bookRoutes");

app.use("/api/v1/books", bookRouter);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
