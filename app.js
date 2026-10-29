const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");
const pageNotFound404 = require("./middleware/pageNotFound404");
const errorServer = require("./middleware/errorServer");

//middlewares

app.get("/", (req, res, next) => {
  next(new Error("Test forzato del 500"));
});

app.use(express.static("public"));
app.use("/posts", postsRouter);
app.use(errorServer);
app.use(pageNotFound404);

//listner

app.listen(port, () => {
  console.log(`Port n: ${port}`);
});
