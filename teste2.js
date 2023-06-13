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

  const newUser = {
    id: id,
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};
