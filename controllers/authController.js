const { Pool } = require("pg");
const pool = require("../db");
const bcrypt = require("bcrypt");

const createUser = async (newId, username, password, email) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const result = await pool.query(
    "INSERT INTO users (id, username, password, email) VALUES ($1, $2, $3, $4) RETURNING id",
    [newId, username, hashedPassword, email]
  );
  return result.rows[0].id;
};

const findUserByUsername = async (username) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

module.exports = { createUser, findUserByUsername };
