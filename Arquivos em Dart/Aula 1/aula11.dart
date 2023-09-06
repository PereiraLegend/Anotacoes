void main(){
  // Tratamento de Erros 2
  Login login = Login();
  // Aqui eu estou tentando logar e caso aconteça alguma exceção e essa exceção seja do tipo PasswordLengthError ele falha ao logar e se for diferente ele acusa outro erro
  try {
    login.logar();
  } on PasswordLengthError catch(e){
    print("Falhou ao logar");
  } catch(e) {
    print('Outro erro')
  }
}

class Login {
  void logar() {
    String user = 'admin';
    String pass = '123';
    if(pass.length <= 6) throw PasswordLengthError();
  }
}

class PasswordLengthError implements Exception {
  PasswordLengthError();
}