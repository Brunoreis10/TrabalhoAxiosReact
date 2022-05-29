const { produto } = require("../db/models");
const createHttpError = require("http-errors");

async function createProduto(req, res, next) {
    const { ds_produto, vl_produto, dt_lancamento } = req.body;
    try {
        const criarProduto = await produto.create({
            ds_produto: ds_produto,
            vl_produto: vl_produto,
            dt_lancamento: dt_lancamento
        });

        res.status(201).json(criarProduto);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
async function getProdutos(req, res, next) {
    try {
        const produtos = await produto.findAll();

        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

async function updateProduto(req, res, next) {
    const { ds_produto, vl_produto, dt_lancamento } = req.body;
    try {
        const id = req.params.id;
        const atualizarProduto = await produto.findOne({ where: { id } });
        if (!atualizarProduto) {
            throw new createHttpError(404, "Produto não encontrado");
        }

        atualizarProduto.ds_produto = ds_produto;
        atualizarProduto.vl_produto = vl_produto;
        atualizarProduto.dt_lancamento = dt_lancamento;
        await atualizarProduto.save();
        res.status(200).json(atualizarProduto);
    } catch (error) {
        next(error);
    }
}

async function deleteProduto(req, res, next) {
    try {
        const id = req.params.id;
        const deletarProduto = await produto.findOne({ where: { id } });

        if (!deletarProduto) {
            throw new createHttpError(404, "Produto não encontrado");
        }
    
        await deletarProduto.destroy();

        res.status(204).json(deletarProduto);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProduto,
    getProdutos,
    updateProduto,
    deleteProduto
}