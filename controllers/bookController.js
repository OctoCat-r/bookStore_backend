const postgre = require("../db");
const bookController = {
  getBySearch: async (req, res) => {
    try {
      const query = req.query.query;
      console.log(query);
      //   const { rows } = await postgre.query("select * from books ");
      const { rows } = await postgre.query(
        `SELECT *
                 FROM books
                 WHERE (genre || authors || title) ILIKE $1`,
        [`%${query}%`]
      );
      res.json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  getById: async (req, res) => {
    try {
      console.log(req.params.id);
      const { rows } = await postgre.query(
        "select * from books where id = $1",
        [req.params.id]
      );
      if (rows[0]) {
        return res.json({ msg: "OK", data: rows });
      }
      console.log(rows);

      res.status(404).json({ msg: "not found" });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  create: async (req, res) => {
    const rating = 4;
    try {
      const { id, title, author, description, imageUrl, price, genre } =
        req.body;

      const sql =
        "INSERT INTO books(id,title, authors, genre, description, image, rating, price) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";

      const { rows } = await postgre.query(sql, [
        id,
        title,
        author,
        genre,
        description,
        imageUrl,
        rating,
        price,
      ]);
      console.log(rows[0]);

      res.json({ msg: "Added successfully", data: rows[0] });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  updateById: async (req, res) => {
    try {
      const { title, price, author, imageUrl } = req.body;

      const sql =
        "UPDATE books set title = $1, price = $2, authors = $3, image = $4 where id = $5 RETURNING *";

      const { rows } = await postgre.query(sql, [
        title,
        price,
        author,
        imageUrl,
        req.params.id,
      ]);

      res.json({ msg: "OK", data: rows[0] });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  deleteById: async (req, res) => {
    try {
      const sql = "DELETE FROM books where id = $1 RETURNING *";

      const { rows } = await postgre.query(sql, [req.params.id]);

      if (rows[0]) {
        return res.json({ msg: "OK", data: rows[0] });
      }

      return res.status(404).json({ msg: "not found" });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
  getAll: async (req, res) => {
    try {
      const { rows } = await postgre.query("select * from books ");
      res.json({ msg: "OK", data: rows });
    } catch (error) {
      res.json({ msg: error.msg });
    }
  },
};

module.exports = bookController;
