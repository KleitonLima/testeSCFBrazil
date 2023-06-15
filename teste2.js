const data = require("./fakeData");

module.exports = function (req, res) {
  //  função para gerar id aleatório com base na data e hora + um número aleatório
  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dataHora = new Date().getTime();

    return `${random}-${dataHora}`;
  };

  const id = generateId();
  const name = req.body.name;
  const job = req.body.job;
  let newUser = {};

  // Verificação se existiu o name e job no body
  name && job
    ? ((newUser = {
        id: id,
        name: name,
        job: job,
      }),
      (data.push(newUser), res.send(newUser)))
    : res
        .status(404)
        .send("Não é possível cadastrada um usuário com dados faltando!");
};
