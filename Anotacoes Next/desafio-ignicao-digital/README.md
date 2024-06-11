# Gerenciador de Dados
Uma aplicação que gerencia dados coletados de clientes.

Frontend: NextJs

Backend: Nodejs

Banco de Dados: MongoDB

Testes: Jest (Frontend e Backend)

Segurança (Autenticação, Autorização e Criptografia): jsonwebtoken, bcryptjs e next-auth (backend e frontend)

Ferramentas Externas: MongoDB Compass (Para a visualização do banco de dados), Insomnia (Para testar a Api) e git (Para o versionamento local do código)

Sobre a organização do desafio: Optei por separar o backend(api "node") do frontend(next), de forma que seja feito o "consumo para uma api externa", quanto ao conteúdo de anbos seguem o padrão REST de construção

Sugestão do desafio: Seguindo o que foi pedido a minha implementação foi de que devem haver dois tipos de usuários (Admin e Cliente), ao entrar na tela de login uma vez que o usuário coloque as suas credenciais de entrada (email e senha) o sistema verifica se ele é "Admin" ou "Cliente", uma vez que ele seja um "Admin" ele é redirecionado para a tela "Dashboard Admin", onde ele é capaz de listar, cadastrar, alterar e deletar usuários e tags, sendo capaz também de associar tags a usuários, uma vez que ele seja um "Cliente" ele é redirecionado para a tela "Dashboard Cliente", onde o mesmo irá vizualizar as tags ao qual foi associado por um "Admin", durante esses processo a autorização das requisições para a api é dada por meio de tokens, e no frontend a autorização para o acesso das rotas especificas para os dois tipos de usuários é configurada pelo next-auth, o que garante que não haja acesso não autorizado a rotas não autorizadas

Observação 1: Além do que implementei na minha sugestão do desafio, também adicionei pequenas funcionalidades;

Observação 2: Os testes de rotas de exemplo exportados do Insomnia seguem em anexo na pasta do backend

Comando para a inicialização do backend: "yarn dev"

Comando para o teste do backend: "yarn test"

Endereço do backend: "http://localhost:5001"

Requisição para criação do usuário admin:

    BaseURL: http://localhost:5001/api
    URL: http://localhost:5001/api/usuario/register

    {
	    "nome":"admin",
	    "email":"admin@gmail.com",
	    "password":"1234",
	    "regra":"Admin",
	    "tags":[""]
    }

Resposta:

    Status 200

    {
        "token":"..."
    }

Sobre a configuração do banco de dados: O script é rodado na pasta models do backend

Comando para a inicialização do frontend: "yarn dev"

Comando para o teste do frontend: "yarn test"

Endereço do frontend: "http://localhost:3000"

Observação 3: Outras configurações adicionais se encontram nos arquivos ".env" do frontend e do backend

