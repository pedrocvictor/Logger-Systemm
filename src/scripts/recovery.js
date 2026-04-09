const username = document.querySelector('#username-recovery');
const new_password = document.querySelector('#new-password-recovery');
const confirm_new_password = document.querySelector('#confirm-new-password-recovery');
const button = document.querySelector('#button-recovery'); /*seleciona os elementos do formulário de recuperação de senha usando querySelector e armazena as referências nas variáveis username, new_password, confirm_new_password e button. Esses elementos são usados para capturar as entradas do usuário, como o nome de usuário e as novas senhas, e para adicionar um ouvinte de evento ao botão de recuperação de senha.*/

button.addEventListener('click', (event) => {
    event.preventDefault(); /*evita o comportamento padrão do botão, que é enviar o formulário e recarregar a página*/


    const usernameValue = username.value;
    const newPasswordValue = new_password.value;
    const confirmNewPasswordValue = confirm_new_password.value;

    const usernameSession = sessionStorage.getItem('username'); /*sessionStorage.getItem() é um método usado para recuperar um valor armazenado em sessionStorage, onde o parâmetro é a chave do valor que queremos recuperar. No exemplo acima, estamos recuperando o nome de usuário armazenado com a chave 'username' e armazenando o valor na variável usernameSession.*/

    if (usernameValue === '' || 
        newPasswordValue === '' || 
        confirmNewPasswordValue === '') {
        alert('Preencha todos os campos');
        return;
    };
 
    if (usernameValue !== usernameSession) {
        alert ('Usuário não encontrado.');
        return;
    };

    if (newPasswordValue !== confirmNewPasswordValue) {
        alert ('Senhas não compatíveis.');
        return; 
    };

    sessionStorage.setItem('password', newPasswordValue); /*sessionStorage é uma forma de armazenar dados no navegador, ele armazena os dados apenas durante a sessão do navegador, ou seja, quando o navegador é fechado, os dados são apagados. Ele é útil para armazenar dados temporários, como a senha do usuário, que pode ser usada para autenticação na página de login. O método setItem() é usado para armazenar um valor em sessionStorage, onde o primeiro parâmetro é a chave e o segundo parâmetro é o valor. No exemplo acima, estamos atualizando a senha do usuário com a chave 'password' e o valor da variável newPasswordValue. */

    alert('Senha recuperada com sucesso!');

    window.location.href = './login.html'; /*redireciona para a página de login*/
});

const checkbox =  document.querySelector('#checkbox-recovery'); 

checkbox.addEventListener('change', () => {
    const type = new_password.getAttribute('type'); 

    if (type === 'password') {
        new_password.setAttribute('type', 'text');
        confirm_new_password.setAttribute('type', 'text');
        return;
    };

    new_password.setAttribute('type', 'password');
    confirm_new_password.setAttribute('type', 'password');
});