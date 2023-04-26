function Verifica(){
    let nome = document.getElementById('name').value;
    let genero = document.getElementById('gender').value;
    let date = document.getElementById('borndate').value;
    let CPF = document.getElementById('cpf').value;
    let endereco = document.getElementById('adress').value;
    let telefone = document.getElementById('telephone').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('subject').value;
    let senhasim = document.getElementById('confirmsenha').value;

    if (!nome || !genero || !date || !CPF || !endereco || !telefone || !email || !senha || !senhasim){
        alert("Por favor preencha todos os campos obrigatórios!");
    } else{
        alert("Campos preechidos com sucesso!");
    }
    if (senha !== senhasim) {
        alert("As senhas tem de ser iguais!");
    }
}