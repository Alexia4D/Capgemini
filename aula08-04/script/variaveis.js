//Declaração de variáveis
var nome = "Maria"
console.log("Maria")

//Criação de Array
const fruta = ["banana", "maçã", "uva"]
console.log(fruta)

//push - add elemento ao final do array
fruta.push("Pera")
console.log(fruta)

//unshift - add elemento no inicio do array
fruta.unshift("Limão")
console.log(fruta)

//pop - remove ultimo elemento do array
fruta.pop()
console.log(fruta)

//delete - exclui elemento na posição especificada
delete fruta[3]
console.log(fruta)

fruta[3] = "Laranja"
console.log(fruta)

//shift - remove o primeiro elemento do array
fruta.shift()
console.log(fruta)

var contato = {
  nome: "Pedro",
  telefone: "3456-0988",
  idade: 78
}
  console.log(contato)

var x = function soma(n1, n2){
  return n1+n2
}
console.log(x(10,20))