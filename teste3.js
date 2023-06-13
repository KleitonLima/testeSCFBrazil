const data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  //  #Forma simples

  const deleteUser = data.findIndex((user) => user.name === name);

  // #Forma mais completa aplicando filtros na pesquisa

  //   // função para retirar acentos e espaços e deixar tudo minúsculo

  //   const simplificar = (element) => {
  //     return element
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .toLowerCase();
  //   };

  //   // função para aceitar _ e - como espaço
  //   const searchTerm = name.replace(/[_-]/g, " ");

  //   const deleteUser = data.findIndex(
  //     (user) => simplificar(user.name) === simplificar(searchTerm)
  //   );

  deleteUser !== -1
    ? (data.splice(deleteUser, 1), res.send("success"))
    : res.send("Usuário não encontrado");
};
