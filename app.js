const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");

app.use("/posts", postsRouter);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello express");
});

//listner
app.listen(port, () => {
  console.log(`Port n: ${port}`);
});
