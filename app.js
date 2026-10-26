const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(port, () => {
  console.log(`Port n: ${port}`);
});
