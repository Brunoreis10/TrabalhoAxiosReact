const router = require("express").Router();

const clientesControllers = require("../controllers/clientesControllers")

// Criar um cliente
router.post("/clientes", clientesControllers.createCliente);

// Editar um cliente
router.put("/:id", clientesControllers.updateCliente);

router.get("/", clientesControllers.getClientes);

router.delete("/:id", clientesControllers.deleteCliente);

module.exports = router;