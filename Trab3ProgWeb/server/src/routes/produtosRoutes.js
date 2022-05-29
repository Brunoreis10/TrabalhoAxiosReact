const router = require("express").Router();

const produtosControllers = require("../controllers/produtosControllers")

// Criar um produto
router.post("/produtos", produtosControllers.createProduto);

// Editar um produto
router.put("/:id", produtosControllers.updateProduto);

router.get("/", produtosControllers.getProdutos);

router.delete("/:id", produtosControllers.deleteProduto);

module.exports = router;