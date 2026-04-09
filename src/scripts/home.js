const title = document.querySelector('h1');

const name = sessionStorage.getItem('name'); /*sessionStorage.getItem() é um método usado para recuperar um valor armazenado em sessionStorage, onde o parâmetro é a chave do valor que queremos recuperar. No exemplo acima, estamos recuperando o nome do usuário com a chave 'name' e armazenando o valor na variável name. */

title.textContent = `Bem-vindo, ${name}!`; /*title.textContent é uma propriedade que representa o conteúdo de texto de um elemento HTML. No exemplo acima, estamos usando template literals (``) para inserir o valor da variável name na mensagem de boas-vindas e atribuindo essa mensagem à propriedade textContent do elemento title, que é um elemento h1. Isso fará com que a mensagem de boas-vindas seja exibida no título da página. */

