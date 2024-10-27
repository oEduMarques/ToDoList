Gerenciador de Tarefas
Este projeto é uma aplicação web para gerenciar tarefas pessoais, com funcionalidades para adicionar, visualizar, filtrar e remover tarefas. As tarefas são armazenadas no localStorage do navegador, o que permite a persistência dos dados sem a necessidade de um banco de dados externo.

🛠️ Tecnologias Utilizadas
HTML5: Estruturação da interface.
CSS3: Estilização da aplicação, com um design simples e intuitivo.
JavaScript: Lógica da aplicação, com manipulação do localStorage para armazenamento das tarefas e uso de classes para organização do código.


📂 Estrutura de Arquivos
O projeto está dividido nos seguintes arquivos principais:

index.html: Página principal com o formulário de cadastro e listagem das tarefas.
style.css: Estilos para a página, incluindo o layout da lista de tarefas e a aparência dos botões.
database.js: Classe Database para gerenciar o armazenamento e recuperação das tarefas no localStorage.
script.js: Classe Task para a criação de tarefas e lógica de manipulação, incluindo validações e filtros.
README.md: Documentação do projeto.


🚀 Funcionalidades
Adicionar Tarefas
Os usuários podem adicionar uma tarefa preenchendo os campos de data, tipo e descrição. As informações da tarefa são armazenadas no localStorage, tornando-as persistentes entre as sessões.

Listar Tarefas
As tarefas são exibidas em uma tabela, onde cada linha mostra a data, o tipo e a descrição da tarefa. Cada tarefa pode ser visualizada diretamente na página.

Filtrar Tarefas
O usuário pode buscar tarefas com base na descrição usando o campo de filtro. Esse filtro ajuda a localizar tarefas específicas em uma lista extensa.

Excluir Tarefas
Cada tarefa tem um botão "Delete" que permite ao usuário removê-la do localStorage e, consequentemente, da lista exibida na página.

🔧 Como Executar o Projeto
Pré-requisitos
Para rodar o projeto, você só precisa de um navegador web moderno.

Passo a Passo
Clone ou baixe o repositório.
Abra o arquivo index.html em um navegador.
A aplicação será carregada, e você poderá adicionar, visualizar, filtrar e excluir tarefas.


⚙️ Organização do Código
O código está organizado em classes para manter a estrutura modular e fácil de entender:

Task: Classe que representa uma tarefa individual. Contém os métodos para validar os dados de entrada.
Database: Classe para gerenciar o armazenamento de dados. Inclui métodos para inicializar o localStorage, carregar, criar e remover tarefas.


🚀 Funcionalidades Futuras
Aqui estão algumas funcionalidades futuras que podem ser adicionadas para expandir a aplicação:

Edição de Tarefas: Permitir que o usuário edite as tarefas após a criação.
Categorias Customizadas: Opção de adicionar novas categorias personalizadas para organizar melhor as tarefas.
Armazenamento Externo: Migrar o armazenamento para uma solução em nuvem ou banco de dados para sincronizar entre dispositivos.


👥 Contribuições
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto.
Crie uma nova branch com sua funcionalidade (git checkout -b minha-feature).
Commit suas mudanças (git commit -am 'Adiciona nova funcionalidade').
Envie para o branch (git push origin minha-feature).
Crie um Pull Request.


📝 Licença
Este projeto é de uso livre e está disponível sob a licença MIT.
