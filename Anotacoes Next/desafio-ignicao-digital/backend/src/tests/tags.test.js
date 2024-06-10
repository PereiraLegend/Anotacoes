const TagsController = require("../app/controllers/TagsController");
const { Tags } = require("../app/models/TagsModels");

describe("Testes para o Tags", () => {

    it("deve retornar as informações da tag pelo ID", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findById = jest.fn().mockResolvedValue({
            _id: "1",
            nome: "Tag1",
            descricao: "Descrição da Tag1",
        });

        await TagsController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            _id: "1",
            nome: "Tag1",
            descricao: "Descrição da Tag1",
        });
    });

    it("deve retornar uma mensagem de erro se a tag não for encontrada pelo ID", async () => {
        const req = {
            params: {
                id: "2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findById = jest.fn().mockResolvedValue(null);

        await TagsController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "Tag não encontrada!" });
    });

    it("deve retornar uma mensagem de erro se ocorrer um erro ao buscar a tag pelo ID", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Tags.findById = jest.fn().mockRejectedValue(new Error("Erro ao buscar tag"));

        await TagsController.getId(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao listar tag");
    });

    it("deve retornar todas as tags", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.find = jest.fn().mockResolvedValue([
            {
                _id: "1",
                nome: "Tag1",
                descricao: "Descrição da Tag1",
            },
            {
                _id: "2",
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
        ]);

        await TagsController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            {
                _id: "1",
                nome: "Tag1",
                descricao: "Descrição da Tag1",
            },
            {
                _id: "2",
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
        ]);
    });

    it("deve lidar com erro ao buscar tags", async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Tags.find = jest.fn().mockRejectedValue(new Error("Erro ao buscar tags"));

        await TagsController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao listar tags");
    });

    it("deve criar uma nova tag", async () => {
        const req = {
            body: {
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findOne = jest.fn().mockResolvedValue(null);

        Tags.create = jest.fn().mockResolvedValue({
            _id: "123",
            nome: "Tag2",
            descricao: "Descrição da Tag2",
        });

        await TagsController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            response: {
                _id: "123",
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
            msg: "Tag cadastrada com sucesso!",
        });
    });

    it("deve retornar status 400 se a tag já existir", async () => {
        const req = {
            body: {
                nome: "Tag1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findOne = jest.fn().mockResolvedValue({});

        await TagsController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "Tag já existe" });
    });

    it("deve lidar com erro ao criar tag", async () => {
        const req = {
            body: {
                nome: "NovaTag",
                descricao: "Descrição da NovaTag",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Tags.findOne = jest.fn().mockRejectedValue(new Error("Erro ao criar tag"));

        await TagsController.create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao criar tag");
    });

    it("deve atualizar uma tag existente", async () => {
        const req = {
            params: {
                id: "1",
            },
            body: {
                nome: "Tag1",
                descricao: "Descrição da Tag1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findByIdAndUpdate = jest.fn().mockResolvedValue({
            _id: "1",
            nome: "Tag2",
            descricao: "Descrição da Tag2",
        });

        await TagsController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            updateTags: {
                _id: "1",
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
            msg: "Tag atualizada com sucesso!",
        });
    });

    it("deve retornar status 404 se a tag não for encontrada ao atualizar", async () => {
        const req = {
            params: {
                id: "1",
            },
            body: {
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

        await TagsController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "Tag não encontrada" });
    });

    it("deve lidar com erro ao atualizar tag", async () => {
        const req = {
            params: {
                id: "1",
            },
            body:
            {
                nome: "Tag2",
                descricao: "Descrição da Tag2",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Tags.findByIdAndUpdate = jest.fn().mockRejectedValue(new Error("Erro ao atualizar tag"));

        await TagsController.update(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao atualizar tag");
    });

    it("deve deletar uma tag existente pelo ID", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findById = jest.fn().mockResolvedValue({
            _id: "1",
            nome: "Tag1",
            descricao: "Descrição da Tag1",
        });

        Tags.findByIdAndDelete = jest.fn().mockResolvedValue({
            _id: "1",
            nome: "Tag1",
            descricao: "Descrição da Tag1",
        });

        await TagsController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    });

    it("deve retornar status 404 se a tag não existir ao deletar", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        Tags.findById = jest.fn().mockResolvedValue(null);

        await TagsController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "Tag não encontrada" });
    });

    it("deve lidar com erro ao deletar tag", async () => {
        const req = {
            params: {
                id: "1",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        Tags.findById = jest.fn().mockRejectedValue(new Error("Erro ao deletar tag"));

        await TagsController.delete(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith("Erro ao deletar tag");
    });
});
