const data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  const user = data.find((e) => {
    return e.name === name;
  });

  user
    ? (user.readings++, res.send(`Usuário ${name} lido ${user.readings} vezes`))
    : res.send("Usuário inválido!");
};
