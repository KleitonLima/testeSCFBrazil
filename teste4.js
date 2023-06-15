const data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;

  const reg = data.find((e) => e.id == id);
  const name = req.body.name;
  const job = req.body.job;

  reg
    ? name && job
      ? ((reg.name = name), (reg.job = job), res.send(reg))
      : res.status(404).send("Não é possível atualizar os dados para vazio!")
    : res.status(404).send("Usuário não encontrado!");
};
