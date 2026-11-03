const express = require("express");
const router = express.Router();
const connection = require("../data/db");

//lettura
router.get("/", (req, res, next) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
});

//lettura singola
router.get("/:id", (req, res, next) => {
  const sql = "SELECT * FROM posts WHERE id = ?";
  const id = req.params.id;

  connection.query(sql, [id], (err, results, next) => {
    if (err) return next(err);
    if (results.length === 0) {
      return res.status(404).json({
        error: "post not found",
      });
    }
    res.json(results[0]);
  });
});

//create
router.post("/", (req, res) => {
  res.send("Creazione posts");
});

//update

router.put("/:id", (req, res) => {
  res.send("Creazione post n: " + req.params.id);
});

//delete
router.delete("/:id", (req, res) => {
  // res.send("Cancellazione post n: " + req.params.id);

  const id = req.params.id;
  const sql = "DELETE FROM posts WHERE id = ?";

  connection.query(sql, [id], (err, results, next) => {
    if (results.affectedRows === 0) {
      return res.status(404).json({
        error: "post not found",
      });
    }
    res.json({ message: "post cancellato con successo" });
  });
});

module.exports = router;
