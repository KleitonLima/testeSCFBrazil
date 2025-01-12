const data = require("./fakeData");
const simplificar = require("./utils");

module.exports = function (req, res) {
  const name = req.query.name;

  const user = data.find((e) => {
    return simplificar(e.name) === simplificar(name);
  });

  user
    ? res.send(`Usuário ${name} lido ${user.readings} vezes`)
    : res.status(404).send("Usuário não encontrado!!");
};
