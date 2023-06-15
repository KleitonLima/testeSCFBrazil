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

  if (!user) {
    return res.status(404).send("Usuário não encontrado!");
  }

  if (user.admin === false || user.admin === undefined) {
    return res.status(401).send("Usuário não autorizado!");
  }

  next();
};

module.exports = {
  checkEspacoMiddleware,
  checkAdminMiddleware,
};
