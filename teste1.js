const data = require("./fakeData");
const simplificar = require("./utils");

const getUser = (req, res) => {
  const name = req.query.name;

  const user = data.find((e) => {
    return simplificar(e.name) == simplificar(name);
  });

  user ? res.send(user) : res.send("Usuário não encontrado");
};

const getUsers = (req, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
