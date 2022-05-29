const { cliente } = require("../db/models");
const createHttpError = require("http-errors");

async function createCliente(req, res, next) {
    const { nm_cliente, nr_cpf, nr_telefone, ds_email } = req.body;
    try {
        const [criarCliente, created] = await cliente.findOrCreate({
            where: { nr_cpf },
            defaults: { nm_cliente, ds_email, nr_telefone }
        });

        if (!created) {
            throw new createHttpError(409, "CPF já cadastrado!");
        }

        res.status(201).json(criarCliente);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
async function getClientes(req, res, next) {
    try {
        const getClientes = await cliente.findAll();

        res.json(getClientes);
    } catch (error) {
        next(error);
    }
}

async function updateCliente(req, res, next) {
    const { nm_cliente, ds_email, nr_telefone } = req.body;
    try {
        const id = req.params.id;
        const atualizarCliente = await cliente.findOne({ where: { id } });
        if (!atualizarCliente) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        atualizarCliente.nm_cliente = nm_cliente;
        atualizarCliente.ds_email = ds_email;
        atualizarCliente.nr_telefone = nr_telefone;
        await atualizarCliente.save();
        res.status(200).json(atualizarCliente);
    } catch (error) {
        next(error);
    }
}

async function deleteCliente(req, res, next) {
    try {
        const id = req.params.id;
        const deletarCliente = await cliente.findOne({ where: { id } });

        if (!deletarCliente) {
            throw new createHttpError(404, "Usuário não encontrado");
        }
    
        await deletarCliente.destroy();

        res.status(204).json(deletarCliente);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCliente,
    getClientes,
    updateCliente,
    deleteCliente
}