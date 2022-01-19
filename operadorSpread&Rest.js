//Operador ... rest(Juntar)/spread(espalhar)
// User rest com parâmetro de função

//Usar spread com objeto

const funcionario = {nome: 'Maria', salario:1232.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Lucas']
console.log(grupoFinal);