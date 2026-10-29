const express = require("express");
const router = express.Router();

//lettura
router.get("/", (req, res) => {
  res.send("Lettura posts");
});

//lettura singola
router.get("/:id", (req, res) => {
  res.send("Lettura post n: " + req.params.id);
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
  res.send("Cancellazione post n: " + req.params.id);
});

module.exports = router;
