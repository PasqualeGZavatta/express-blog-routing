const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");
const pageNotFound404 = require("./middleware/pageNotFound404");
const errorServer = require("./middleware/errorServer");

//middlewares

app.use(express.static("public"));
app.use("/posts", postsRouter);
app.use(pageNotFound404);
app.use(errorServer);

//listner

app.listen(port, () => {
  console.log(`Port n: ${port}`);
});
