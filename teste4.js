const data = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;

  const reg = data.find((e) => e.id == id);
  reg
    ? ((reg.name = req.body.name), (reg.job = req.body.job), res.send(reg))
    : res.send("Usuário não encontrado!");
};
