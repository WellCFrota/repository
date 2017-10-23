function Enviar() {

    var nome  = document.getElementById("nomeid");
    var email  = document.getElementById("emailid");
    var text = document.getElementById("textarea");

    if(nome.value == "" || nome.value.length > 80) {
      alert( "Seu não pode ser vazio. Verifique!" );
      nome.focus();
      return false;
    }
    else if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
      alert( "Preencha campo e-mail corretamente!" );
      email.focus();
      return false;
    }
    else {
      if(text.value == "" ) {
        alert( 'Este campo ' + text.value + ' não pode ser vazio. Verifique!');
        text.focus();
        return false;
      }
    }

    if (nome.value != ""  && email.value != "" && text.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }else {
        alert('Sr(a) ' + nome.value + ' alguns dados não foram preenchidos. Verifique!')
    }

}
