const checkEspacoMiddleware = (req, res, next) => {
  const name = req.query.name;

  const comEspaco = name.replace(/[_-]/g, " ");

  req.query.name = comEspaco;

  next();
};

module.exports = {
  checkEspacoMiddleware,
};
