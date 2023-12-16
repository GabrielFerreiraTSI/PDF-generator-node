const express = require("express");
const rowsController = require("./controllers/rowsController.js");
const fileGeneratorController = require("./controllers/fileGeneratorController.js");
const rowsMiddleware = require("./middlewares/rowsMiddleware.js");
const fileGeneratorMiddleware = require("./middlewares/fileGeneratorMiddleware.js");
require("dotenv").config();

const app = express();

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

//Routers
const router = express.Router();

router.get("/", rowsController.getAll);
router.post("/", rowsMiddleware.validateFieldNome, rowsController.createNewRow);
router.delete("/:id", rowsController.deleteRow);
router.put("/:id", rowsMiddleware.validateFieldStatus, rowsController.updateRow);
router.patch("/", fileGeneratorMiddleware.validateFieldNome, 
fileGeneratorMiddleware.validateFieldFabricante, fileGeneratorMiddleware.validateFieldModelo,
fileGeneratorMiddleware.validateFieldAno, fileGeneratorMiddleware.validateFieldTitulo,
fileGeneratorMiddleware.validateFieldValor, fileGeneratorController.generateFile);

app.use(express.json());
app.use(router);

module.exports = app;