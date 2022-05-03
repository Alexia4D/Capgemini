/* Criando funções */
function soma(n1, n2){
  let res = n1 + n2
  console.log(res)
}
soma(10, 20)

function somaRetorno(n1, n2){
  let res = n1 + n2
  return res;
}
var retorno = somaRetorno(30,40)
console.log(retorno)

function somaVetor(num){
  let res = 0
  for(let i = 0; i < num.length; i++){
    res = res + num[i]
  }
  return res
}
var numeros =[10,20,30]
console.log(somaVetor(numeros))

