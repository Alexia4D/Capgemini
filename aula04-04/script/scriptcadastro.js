function onSubmit() {
  var nome = document.getElementsByTagName("input")[0];
  var email = document.getElementsByTagName("input")[1];
  var idade = document.getElementsByTagName("input")[2];
  var data = document.getElementsByTagName("input")[3];
  var horario = document.getElementsByTagName("input")[4];

  if (nome.value === "") {
      alert("Informe nome");
      nome.focus();
      return;
  }
  if (email.value === "") {
      alert("Informe email");
      email.focus();
      return;
  }
  if (idade.value === "") {
      alert("Informe idade");
      idade.focus();
      return;
  }
  if (data.value === "") {
      alert("Informe data");
      data.focus();
      return;
  }
  if (horario.value === "") {
      alert("Informe horário");
      horario.focus();
      return;
  }

  document.getElementsByTagName("form")[0].submit();
  document.getElementsByTagName("form")[1].submit();
  document.getElementsByTagName("form")[2].submit();
  document.getElementsByTagName("form")[3].submit();
  document.getElementsByTagName("form")[4].submit();
}