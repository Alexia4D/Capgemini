/* Função anonima */
let z = function(n1, n2){
  return n1 + n2
}
console.log(z(10,20));

/* Arroy function */
let x = (n1, n2) =>{
  return n1 + n2
}
console.log(x(20,20));

let y = n1 => {
  return n1 * n1 
}
  function consultar(){
    fetch('url') /* objeto */
    .then(x => x.text())
    .then(data => display(data))

    fetch('url')
    .then(function(x){
      return x.text()
    })

  }
