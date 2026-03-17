// Cria variável que vai armazenar uma lista(array)
const usuarios = [
    { nome: "Carlos", idade: 32 },
    { nome: "Ana", idade: 28 },
    { nome: "Felipe", idade: 40}
];

// O find vai buscar
const ana = usuarios.find(usuario => usuario.nome === "Ana"); // === vai encontrar exatamente igual
console.log(ana);

const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuariosAcimaDe30);

const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade);

const usuariosOrdenadosPorIdade2 = usuarios.sort((a, b) => b.idade - a.idade);
console.log(usuariosOrdenadosPorIdade2);
