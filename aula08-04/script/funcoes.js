function ola(){
  console.log("Hello World!!");
}
ola()

function validaIdade(idade){
  if(idade < 18){
    console.log("Menor de idade")
  } else {
    console.log("Maior de idade")
  }
}
validaIdade(19)

function situacaoAluno (media){
  let situacao = "Aprovado"
  if(media < 7){
    situacao = "Reprovado"
  }
  return situacao;
}
var retorno = situacaoAluno(7)
console.log(retorno)