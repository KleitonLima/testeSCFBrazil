const data = require("./fakeData");
const simplificar = require("./utils");

module.exports = function (req, res) {
  const name = req.query.name;

  const deleteUser = data.findIndex(
    (user) => simplificar(user.name) === simplificar(name)
  );

  deleteUser !== -1
    ? (data.splice(deleteUser, 1), res.send("success"))
    : res.send("Usuário não encontrado");
};
