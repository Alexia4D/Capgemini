var x = function(n1, n2){
  return n1 + n2
}
let z = x(30,80)
console.log(z);

/* Função autoinvocada */
(
  function(n1, n2) {
      console.log(n1 + n2)
  }
)(20, 30);
