document.querySelector('input[type="button"]').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    console.log(`Email: ${email}, Senha: ${password}`);
    alert("Login realizado!"); 
});