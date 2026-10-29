function pageNotFound404(req, res, next) {
  res.status(404);
  res.json({
    status: 404,
    error: "page not found",
  });
}
module.exports = pageNotFound404;
