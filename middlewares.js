const data = require("./fakeData");

const checkEspacoMiddleware = (req, res, next) => {
  const name = req.query.name;

  const comEspaco = name.replace(/[_-]/g, " ");

  req.query.name = comEspaco;

  next();
};

const checkAdminMiddleware = (req, res, next) => {
  const id = req.query.id;

  const user = data.find((e) => {
    return e.id == id;
  });

  if (user.admin === false) {
    return res.status(401).send("Usuário não autorizado!");
  }

  next();
};

module.exports = {
  checkEspacoMiddleware,
  checkAdminMiddleware,
};
