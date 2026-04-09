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

const checkbox = document.querySelector('#checkbox-login'); /*seleciona o elemento checkbox com o id 'checkbox-login' e armazena a referência na variável checkbox. O checkbox é um elemento de formulário que permite ao usuário selecionar ou desmarcar uma opção. No contexto de um formulário de login, um checkbox pode ser usado para permitir que o usuário escolha se deseja manter-se conectado ou lembrar suas credenciais para futuras visitas.*/

checkbox.addEventListener('change', () => { 
    const type = password.getAttribute('type'); /*getAttribute() é um método usado para obter o valor de um atributo específico de um elemento HTML. No exemplo acima, estamos usando getAttribute() para obter o valor do atributo 'type' do campo de senha. O atributo 'type' é usado para definir o tipo de entrada do campo, e no caso de um campo de senha, ele geralmente é definido como 'password' para ocultar os caracteres digitados.*/

    if (type  === 'password') {
        password.setAttribute('type', 'text');
        return;
    };
    password.setAttribute('type', 'password');
    
}); /*adiciona um ouvinte de evento 'change' ao checkbox, que é acionado sempre que o estado do checkbox é alterado (marcado ou desmarcado). O evento é passado como um parâmetro para a função de callback, permitindo que você acesse informações sobre o evento, como o estado atual do checkbox. No contexto de um formulário de login, esse evento pode ser usado para ativar ou desativar a funcionalidade de mostrar ou ocultar a senha, dependendo do estado do checkbox.*/
