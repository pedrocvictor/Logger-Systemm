const name = document.querySelector('#name-register'); /*# id e . se for classe*/
const username = document.querySelector('#username-register');
const password = document.querySelector('#password-register');
const button = document.querySelector('#button-register');

button.addEventListener('click', event => {
event.preventDefault();/*evita o comportamento padrão do botão, que é enviar o formulário e recarregar a página*/

const name_value = name.value;
const username_value = username.value;
const password_value = password.value;

if (
    name_value === '' || 
    username_value === '' ||
    password_value === ''
) {
    alert('Preencha todos os campos');
    return;
};

sessionStorage.setItem('name', name_value); /*sessionStorage é uma forma de armazenar dados no navegador, ele armazena os dados apenas durante a sessão do navegador, ou seja, quando o navegador é fechado, os dados são apagados. Ele é útil para armazenar dados temporários, como o nome do usuário, que pode ser usado para exibir uma mensagem de boas-vindas na página de login. O método setItem() é usado para armazenar um valor em sessionStorage, onde o primeiro parâmetro é a chave e o segundo parâmetro é o valor. No exemplo acima, estamos armazenando o nome do usuário com a chave 'name' e o valor da variável name_value. */
sessionStorage.setItem('username', username_value);
sessionStorage.setItem('password', password_value);

alert('Usuário cadastrado com sucesso!');

window.location.href = './login.html'; /*redireciona para a página de login*/

});

const checkbox =  document.querySelector('#checkbox-register'); 

checkbox.addEventListener('change', () => {
    const type = password.getAttribute('type'); 

    if (type === 'password') {
        password.setAttribute('type', 'text');
        return;
    };

    password.setAttribute('type', 'password');
});