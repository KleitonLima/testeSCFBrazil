const data = require("./fakeData");

const getUser = (req, res) => {
  // #Forma mais simples

    const user = data.find((e) => {
      return e.name == req.query.name;
    });

  // #Forma mais completa aplicando filtros na pesquisa

  //   // função para retirar acentos e espaços e deixar tudo minúsculo
  //   const simplificar = (element) => {
  //     return element
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .toLowerCase();
  //   };

  //   // função para aceitar _ e - como espaço
  //   const searchTerm = req.query.name.replace(/[_-]/g, " ");

  //   const user = data.find((e) => {
  //     return simplificar(e.name) == simplificar(searchTerm);
  //   });

  user ? res.send(user) : res.send("Usuário não encontrado");
};

const getUsers = (req, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
