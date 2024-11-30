function logar(event) {
    // Impede o envio tradicional do formulário
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin') {
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Após o alerta ser fechado, adicionamos o delay para o redirecionamento
            setTimeout(() => {
                // Redireciona para home.html após 2 segundos (2000ms)
                location.href = "./html/home.html";
            }, 100); // Delay
        });
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}





