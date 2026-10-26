const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello express");
});

//index
app.get("/posts", (req, res) => {
  res.send("Lista dei post");
});
//show 1
app.get("/posts/:id", (req, res) => {
  res.send(`Post n:` + req.params.id);
});

//create
app.post("/posts", (req, res) => {
  res.send("Creazione del post");
});

//Create single
app.put("/posts/:id", (req, res) => {
  res.send(`Creazione del post:` + req.params.id);
});

//delete

app.delete("/posts/:id", (req, res) => {
  res.send(`Cancellazione del post n:` + req.params.id);
});

//listner
app.listen(port, () => {
  console.log(`Port n: ${port}`);
});
