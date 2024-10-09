// Exemplo de JavaScript para ações de login
document.querySelector('input[type="button"]').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Aqui você pode adicionar sua lógica de autenticação
    console.log(`Email: ${email}, Senha: ${password}`);
    alert("Login realizado!"); // Exemplo de alerta
});