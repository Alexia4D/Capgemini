var url = 'http://localhost:3000/contatos'

class Contato{
  constructor(id, nome, fone, email){
      this.id = id;
      this.nome = nome;
      this.fone = fone;
      this.email = email
  }
  salvar(){
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this),
      headers: {
        'Content-type': 'Application/json'
      }
    })
    .catch(erro => console.log(erro))
  }
  consultarTodos(display){
    fetch(url)
    .then(x => x.text())
    .then(data => display(data))
  }
  consultaContatoID(idContato, display){
    fetch(`${url}/${idContato}`)
    .then(x => x.text())
    .then(data => display(data))
  }
  update(){
    fetch(`${url}/${this.id}`,{
      method: 'PUT',
      body: JSON.stringify(this),
      headers: {
        'Content-type': 'Application/json'
      }
    })
    .catch(erro => console.log(erro))
  }
  excluir(idContato){
    fetch(`${url}/${idContato}`,{
      method: 'DELETE'
    })
  }
}