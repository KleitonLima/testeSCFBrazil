const data = require("./fakeData");

const getUser = (req, res) => {
  const name = req.query.name;

  // #Forma mais simples

  const user = data.find((e) => {
    return e.name == name;
  });

  // #Forma mais completa aplicando filtros na pesquisa

  //   // função para retirar acentos e espaços e deixar tudo minúsculo
  // const simplificar = (element) => {
  //   return element
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "")
  //     .toLowerCase();
  // };
  
  // const user = data.find((e) => {
  //   return simplificar(e.name) == simplificar(checkEspaco);
  // });

  user ? res.send(user) : res.send("Usuário não encontrado");
};

const getUsers = (req, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
