// const Pool = require("pg").Pool;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

// const csvFilePath =
//   "/Users/amanjain/smriticutie/internship/server/dummyBooks.csv";
// const tableName = "books";
// let rowCount = 0;
// fs.createReadStream(csvFilePath)
//   .pipe(csv())
//   .on("data", async (row) => {
//     try {
//       const client = await pool.connect();
//       const values = Object.values(row).map((value) =>
//         client.escapeLiteral(value)
//       );
//       const query = `INSERT INTO ${tableName} VALUES (${values.join(", ")})`;

//       console.log("SQL query:", query);
//       await client.query(query);
//       rowCount++;
//       console.log(`Row ${rowCount} inserted successfully.`);
//       client.release();
//     } catch (error) {
//       console.error("Error inserting row:", error);
//     }
//   })
//   .on("end", () => {
//     console.log(
//       `CSV data imported successfully! Total rows inserted: ${rowCount}`
//     );

//     pool.end();
//   })
//   .on("error", (error) => {
//     console.error("Error reading CSV file:", error);
//   });

// module.exports = pool;

// const { Pool } = require("pg");
// const csv = require("csv-parser");
// const fs = require("fs");

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// const csvFilePath =
//   "/Users/amanjain/smriticutie/internship/server/dummyBooks.csv";
// const tableName = "books";
// let rowCount = 0;

// const processCSV = async () => {
//   const client = await pool.connect();

//   try {
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on("data", async (row) => {
//         const values = Object.values(row).map((value) =>
//           client.escapeLiteral(value)
//         );
//         const query = `INSERT INTO ${tableName} VALUES (${values.join(", ")})`;

//         console.log("SQL query:", query);
//         await client.query(query);
//         rowCount++;
//         console.log(`Row ${rowCount} inserted successfully.`);
//       })
//       .on("end", async () => {
//         console.log(
//           `CSV data imported successfully! Total rows inserted: ${rowCount}`
//         );
//       })
//       .on("error", (error) => {
//         console.error("Error reading CSV file:", error);
//       });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   } finally {
//     client.release();
//     pool.end(); // Close the connection pool after all operations are completed
//   }
// };

// processCSV();

// module.exports = pool;

// const { Pool } = require("pg");
// const csv = require("csv-parser");
// const fs = require("fs");

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// const csvFilePath =
//   "/Users/amanjain/smriticutie/internship/server/dummyBooks.csv";
// const tableName = "books";
// let rowCount = 0;

// const processCSV = async () => {
//   const client = await pool.connect();

//   try {
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on("data", async (row) => {
//         const values = Object.values(row).map((value) =>
//           client.escapeLiteral(value)
//         );
//         const query = `INSERT INTO ${tableName} VALUES (${values.join(", ")})`;

//         console.log("SQL query:", query);
//         await client.query(query);
//         rowCount++;
//         console.log(`Row ${rowCount} inserted successfully.`);
//       })
//       .on("end", async () => {
//         console.log(
//           `CSV data imported successfully! Total rows inserted: ${rowCount}`
//         );
//       })
//       .on("error", (error) => {
//         console.error("Error reading CSV file:", error);
//       });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   } finally {
//     client.release(); // Release the individual client, not the entire pool
//   }
// };

// processCSV();

// // Do not close the pool here, let it remain open for the asynchronous CSV processing

// module.exports = pool;

// const csvFilePath =
//   "/Users/amanjain/smriticutie/internship/server/dummyBooks.csv";
// const tableName = "books";
// let rowCount = 0;

// const processCSV = async () => {
//   const client = await pool.connect();

//   try {
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on("data", async (row) => {
//         const values = Object.values(row).map((value) =>
//           client.escapeLiteral(value)
//         );
//         const query = `INSERT INTO ${tableName} VALUES (${values.join(", ")})`;

//         console.log("SQL query:", query);
//         await client.query(query);
//         rowCount++;
//         console.log(`Row ${rowCount} inserted successfully.`);
//       })
//       .on("end", async () => {
//         console.log(
//           `CSV data imported successfully! Total rows inserted: ${rowCount}`
//         );
//       })
//       .on("error", (error) => {
//         console.error("Error reading CSV file:", error);
//       });
//   } catch (error) {
//     console.error("Error connecting to the database or processing CSV:", error);
//   } finally {
//     try {
//       if (client) {
//         await client.release();
//       }
//     } catch (releaseError) {
//       console.error("Error releasing client:", releaseError);
//     }
  
//   }
// };

// processCSV();

module.exports = pool;
