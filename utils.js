// Função para remover acentos e deixar minúsculas as letras
const simplificar = (e) => {
  if (e) {

    return e.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
};

module.exports = simplificar;
