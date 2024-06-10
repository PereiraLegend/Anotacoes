const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UsuariosController = require("../app/controllers/UsuariosController");
const { Usuarios } = require("../app/models/UsuariosModels");

describe("Testes para o Usuarios", () => {

    it("deve criar um novo usuário", async () => {
        const req = {
            body: {
                nome: "Teste",
                email: "teste@gmail.com",
                password: "123456",
                regra: "Cliente",
                tags: ["tag1", "tag2"],
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findOne = jest.fn().mockResolvedValue(null);

        Usuarios.prototype.save = jest.fn().mockResolvedValue({
            _id: "123",
            nome: "Teste",
            email: "teste@gmail.com",
            regra: "Cliente",
            tags: ["tag1", "tag2"],
        });

        bcrypt.genSalt = jest.fn().mockResolvedValue("salt");
        bcrypt.hash = jest.fn().mockResolvedValue("hashedPassword");

        jwt.sign = jest.fn().mockImplementation((payload, secret, options, callback) => {
            callback(null, "token");
        });

        await UsuariosController.register(req, res);

        expect(res.json).toHaveBeenCalledWith({ token: "token" });
    });

    it("deve retornar status 400 se o usuário já existir", async () => {
        const req = {
            body: {
                email: "teste@gmail.com",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findOne = jest.fn().mockResolvedValue({});

        await UsuariosController.register(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ msg: "Usuário já existe" });
    });

    it("deve retornar as informações do usuário autenticado com sucesso", async () => {
        const req = {
            header: jest.fn().mockReturnValue("Bearer token"),
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        jwt.verify = jest.fn().mockReturnValue({
            usuario: {
                id: "usuarioId",
                tags: ["tag1", "tag2"],
            },
        });

        await UsuariosController.getMe(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ id: "usuarioId", tags: ["tag1", "tag2"] });
    });

    it("deve retornar todos os usuários", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.find = jest.fn().mockResolvedValue([
            {
                _id: "1",
                nome: "Usuário 1",
                email: "usuario1@gmail.com",
                regra: "Cliente",
                tags: ["tag1", "tag2"],
            },
            {
                _id: "2",
                nome: "Usuário 2",
                email: "usuario2@gmail.com",
                regra: "Admin",
                tags: ["tag3", "tag4"],
            },
        ]);

        await UsuariosController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            {
                _id: "1",
                nome: "Usuário 1",
                email: "usuario1@gmail.com",
                regra: "Cliente",
                tags: ["tag1", "tag2"],
            },
            {
                _id: "2",
                nome: "Usuário 2",
                email: "usuario2@gmail.com",
                regra: "Admin",
                tags: ["tag3", "tag4"],
            },
        ]);
    });

    it("deve lidar com erro ao buscar usuários", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Usuarios.find = jest.fn().mockRejectedValue(new Error("Erro ao buscar usuários"));

        await UsuariosController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao listar usuários");
    });

    it("deve retornar o usuário correspondente ao ID fornecido", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findById = jest.fn().mockResolvedValue({
            _id: "1",
            email: "teste@gmail.com",
            regra: "Cliente",
            nome: "Teste",
            tags: ["tag1", "tag2"],
        });

        await UsuariosController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            _id: "1",
            email: "teste@gmail.com",
            regra: "Cliente",
            nome: "Teste",
            tags: ["tag1", "tag2"],
        });
    });

    it("deve retornar uma mensagem de erro se o usuário não for encontrado", async () => {
        const req = {
            params: {
                id: "2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findById = jest.fn().mockResolvedValue(null);

        await UsuariosController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "Usuário não encontrado!" });
    });

    it("deve retornar uma mensagem de erro se ocorrer um erro ao buscar o usuário", async () => {
        const req = {
            params: {
                id: "id_do_usuario",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Usuarios.findById = jest.fn().mockRejectedValue(new Error("Erro ao buscar usuário"));

        await UsuariosController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao listar usuário");
    });

    it("deve atualizar um usuário existente", async () => {
        const req = {
            params: {
                id: "1",
            },
            body: {
                nome: "Teste",
                regra: "Cliente",
                tags: ["Tag1", "Tag2"],
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findByIdAndUpdate = jest.fn().mockResolvedValue({
            _id: "1",
            nome: "Teste",
            regra: "Cliente",
            tags: ["Tag1", "Tag2"],
        });

        await UsuariosController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            updateUsuario: {
                _id: "1",
                nome: "Teste",
                regra: "Cliente",
                tags: ["Tag1", "Tag2"],
            },
            msg: "Usuario atualizado com sucesso!",
        });
    });

    it("Deve retornar status 404 se o usuário não for encontrado", async () => {
        const req = {
            params: {
                id: "1",
            },
            body: {
                nome: "Teste",
                regra: "Cliente",
                tags: ["novaTag1", "novaTag2"],
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

        await UsuariosController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "Usuario não encontrado" });
    });

    it("Deve retornar status 400 em caso de erro ao atualizar o usuário", async () => {
        const req = {
            params: {
                id: "1",
            },
            body: {
                nome: "Teste",
                regra: "Cliente",
                tags: ["novaTag1", "novaTag2"],
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Usuarios.findByIdAndUpdate = jest.fn().mockRejectedValue(new Error("Erro ao atualizar usuário"));

        await UsuariosController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao atualizar usuário");
    });

    it("deve deletar um usuário existente pelo ID", async () => {
        const req = {
            params: {
                id: "1234567890",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findById = jest.fn().mockResolvedValue({
            _id: "1234567890",
            email: "teste@gmail.com",
            nome: "Teste",
            regra: "Cliente",
            tags: ["tag1", "tag2"],
        });

        Usuarios.findByIdAndDelete = jest.fn().mockResolvedValue({
            _id: "1234567890",
            email: "teste@gmail.com",
            nome: "Teste",
            regra: "Cliente",
            tags: ["tag1", "tag2"],
        });

        await UsuariosController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um status 404 se o usuário não existir", async () => {

        const req = {
            params: {
                id: "2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Usuarios.findById = jest.fn().mockResolvedValue(null);

        await UsuariosController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(404);

        expect(res.json).toHaveBeenCalledWith({ msg: "Usuario não encontrado" });
    });
});