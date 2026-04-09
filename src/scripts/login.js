const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const button = document.querySelector('#button-login');

button.addEventListener('click', event => {
event.preventDefault();/*evita o comportamento padrão do botão, que é enviar o formulário e recarregar a página*/

const username_value = username.value;
const password_value = password.value;

if (
    username_value === '' ||
    password_value === ''
) {
    alert('Preencha todos os campos');
    return;
};

if ( 
    username_value !== sessionStorage.getItem('username') ||
    password_value !== sessionStorage.getItem('password')
) {
    alert('Usuário ou senha incorretos');
    return;
};

alert(`Bem-vindo, ${sessionStorage.getItem('name')}!`); /*sessionStorage.getItem() é um método usado para recuperar um valor armazenado em sessionStorage, onde o parâmetro é a chave do valor que queremos recuperar. No exemplo acima, estamos recuperando o nome do usuário com a chave 'name' e exibindo uma mensagem de boas-vindas usando template literals (``) para inserir o valor recuperado na mensagem. */

window.location.href = './home.html'; /*redireciona para a página de home*/
});


